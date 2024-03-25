# Async Cats!

## Overview

All of your work must be done in the `index.js` file. Do not change the HTML file directly.

You have access to three asynchronous functions:

- `getAllCats()` which returns an array of all cats
- `getCatsByBreed(breed)` which accepts a breed string and returns all cats of that breed
- `removeCat(catId)` which accepts a cat ID number and removes the cat from the array

## Instructions

You must populate the UI with a list of cats using the getAllCats function. Each cat should use the `./templates/card.html` structure, just like with the Pokémon Cards exercise.

The functions provided are asynchronous, which means they return Promises.

1. Display a list of all cats using the card template structure
2. Enable the breed filter form by adding a click event listener to the button
3. Enable deleting cats from the list by adding a click event listener to the delete button on cat cards. When a cat is deleted, the list of cats displayed on screen should update to reflect the change in data

## Extension

- Comment out your initial solution and implement a solution using [The Cat API](https://thecatapi.com/)