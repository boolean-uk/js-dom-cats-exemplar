# Async Cats!

## Overview

All of your work must be done in the `index.js` file. Do not change the HTML file directly. You will need to create & append elements via Javascript.

You have access to two variables:

- `cats` which is an array of cat objects
- `temperaments` which is an array of temperament strings

You also have access to four asynchronous functions:

- `getAllCats()` which returns an array of all cats
- `getCatsByBreed(breed)` which accepts a breed string and returns all cats of that breed
- `removeCat(catId)` which accepts a cat ID number and removes the cat from the array
- `updateCat(catId, data)` which accepts a cat ID number and an object. Properties and values on the provided object will overwrite those that exist on the original cat object

## Instructions

You must populate the UI with a list of cats using the `getAllCats` function (note: do not use the `cats` variable directly, you **must** use the getAllCats function). Each cat should use the `./templates/card.html` structure, just like with the Pokémon Cards exercise.

The functions provided are asynchronous, which means they return Promises.

1. Display a list of all cats using the card template structure.
2. Enable the breed filter form by adding a click event listener to the button.
3. Enable deleting cats from the list by adding a click event listener to the delete button on cat cards. When a cat is deleted, the list of cats displayed on screen should update to reflect the change in data.
4. Enable updating a cat by adding a form submit event listener.

## Extension

- Comment out your initial solution and implement a solution using [The Cat API](https://thecatapi.com/)