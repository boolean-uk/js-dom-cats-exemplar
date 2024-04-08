console.log(cats)
console.log(temperaments)
let breedFilter = undefined

function createCatCard(catObject) {
    const mainElement = document.createElement('li')
    mainElement.innerHTML = `
    <button>Delete</button>
    <h2 class="card--title">${catObject.name}</h2>
    <img
        width="256"
        class="card--img"
        src="${catObject.image}"
    />
    <form>
        <ul class="card--text">
            <li>Age: <input name="age" type="number" value="${catObject.age}" /></li>
            <li>Breed: <input name="breed" type="text" value="${catObject.breed}" /></li>
            <li>Colour: <input name="colour" type="text" value="${catObject.colour}" /></li>
            <li>
                Temperament:
                <select id="temperament" name="temperament">
                    <option value="Affectionate">Affectionate</option>
                    <option value="Bold">Bold</option>
                    <option value="Calm">Calm</option>
                    <option value="Curious">Curious</option>
                    <option value="Energetic">Energetic</option>
                    <option value="Friendly">Friendly</option>
                    <option value="Independent">Independent</option>
                    <option value="Loyal">Loyal</option>
                    <option value="Playful">Playful</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Shy">Shy</option>
                    <option value="Sociable">Sociable</option>
                </select>
            </li>
            <li>
                <button type="submit">Update</button>
            </li>
        </ul>
    </form>
    `
    const selectElement = mainElement.querySelector('select#temperament')
    const temperamentOption = selectElement.querySelector(`option[value="${catObject.temperament}"]`)
    temperamentOption.setAttribute('selected', true)

    return mainElement
}

async function addCatCardsToDOM() {
    const cardsContainer = document.querySelector('.cards')
    cardsContainer.replaceChildren()
    const catsData = await getAvailableCats()

    for (const cat of catsData) {
        cardsContainer.append(createCatCard(cat))
    }
}

async function getAvailableCats() {
    const allCats = await getAllCats()
    console.log('getting cats by breed', breedFilter);
    const availableBreeds = breedFilter ? allCats.filter(cat => cat.breed === breedFilter) : allCats

    return availableBreeds
}

function attachBreedFilter() {
    const breedFilterInput = document.querySelector('#breed-input')
    const breedFilterSubmit = document.querySelector('#filter-button')
    breedFilterSubmit.addEventListener('click', (event) => {
        event.preventDefault()
        breedFilter = breedFilterInput.value
        addCatCardsToDOM()
    })
}

addCatCardsToDOM()
attachBreedFilter()