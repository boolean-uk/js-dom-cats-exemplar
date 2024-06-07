// SELECT Existing DOM elements
const catCardsUL = document.querySelector(".cards");
const filterSubmitButton = document.querySelector("#filter-button");
const filterTextInput = document.querySelector("#breed-input");

// FUNCTIONS TO INTERACT WITH STATE
function fetchCats() {
  getAllCats().then((cats) => renderCatsList(cats));
}

// FUNCTIONS TO HANDLE USER INPUT EVENTS
// NOTE: using async function here, so we can call await
filterSubmitButton.addEventListener("click", async () => {
  const filterText = filterTextInput.value;
  const filteredCats = await getCatsByBreed(filterText);
  renderCatsList(filteredCats);
});

function handleDeleteCatClick(cat) {
  removeCat(cat.id).then(() => {
    // fetch all cats again and re-render
    fetchCats();
  });
}

// ALTERNATIVE to handleDeleteCatClick
// async function handleDeleteCatClick(cat) {
//   await removeCat(cat.id);
//   fetchCats();
// }

// FUNCTIONS FOR RENDERING
function renderCatsList(cats) {
  // clear existing cats list
  catCardsUL.innerHTML = "";
  // render each cat card
  for (let c = 0; c < cats.length; c++) {
    const cat = cats[c];
    const li = createCatCard(cat);
    catCardsUL.append(li);
  }
}

function createCatCard(cat) {
  // create delete button
  const button = createDeleteCatButton(cat);

  // heading
  const heading = document.createElement("h2");
  heading.classList.add("card--title");
  heading.innerText = cat.name;

  // img
  const img = document.createElement("img");
  img.classList.add("card--img");
  img.setAttribute("src", cat.image);
  img.setAttribute("width", 256);

  const form = createCardForm(cat);

  // build card
  const li = document.createElement("li");
  li.classList.add("card");

  li.append(button);
  li.append(heading);
  li.append(img);
  li.append(form);

  return li;
}

function createDeleteCatButton(cat) {
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", () => handleDeleteCatClick(cat));
  return button;
}

function createCardForm(cat) {
  const form = document.createElement("form");

  const ul = document.createElement("ul");
  ul.classList.add("card--text");

  const liAge = document.createElement("li");
  liAge.innerText = "Age: ";
  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.value = cat.age;
  ageInput.name = "age";
  liAge.append(ageInput);

  const liBreed = document.createElement("li");
  liBreed.innerText = "Breed: ";
  const breedInput = document.createElement("input");
  breedInput.type = "text";
  breedInput.value = cat.breed;
  breedInput.name = "breed";
  liBreed.append(breedInput);

  const liColour = document.createElement("li");
  liColour.innerText = "Colour: ";
  const colourInput = document.createElement("input");
  colourInput.type = "text";
  colourInput.value = cat.colour;
  colourInput.name = "colour";
  liColour.append(colourInput);

  const liTemperament = document.createElement("li");
  liTemperament.innerText = "Temperament";
  const temperamentSelect = createTemperamentSelect(cat);
  liTemperament.append(temperamentSelect);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Submit";

  // bind form submit here
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // get the new values
    const data = {
      age: ageInput.value,
      breed: breedInput.value,
      colour: colourInput.value,
      temperament: temperamentSelect.value,
    };

    updateCat(cat.id, data).then(() => fetchCats());
  });

  // build form
  form.append(ul);
  ul.append(liAge);
  ul.append(liBreed);
  ul.append(liColour);
  ul.append(liTemperament);
  ul.append(submitButton);

  return form;
}

function createTemperamentSelect(cat) {
  const select = document.createElement("select");
  select.name = "temperament";

  temperaments.forEach((temperament) => {
    const option = document.createElement("option");
    option.value = temperament;
    option.innerText = temperament;
    option.selected = temperament === cat.temperament;
    select.append(option);
  });
  return select;
}

// INITIALISATION CODE
function initialise() {
  fetchCats();
}

initialise();
