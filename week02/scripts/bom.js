const input = document.querySelector('#favchap');
const button = document.querySelector('button');

/*In your blank js file, declare three (3) variables that hold references to the input, button, and list elements */
const list = document.querySelector('_');

/*Create a li element that will hold each entries chapter title and an associated delete button */
const li = document.createElement('li');

/*Create a delete button */
const deleteButton = document.createElement('button');

/*Populate the li element variable's textContent or innerHTML with the input value*/
li.textContent = input.ariaValueMax;

/*Populate the button textContent with a ❌ */

deleteButton.textContent = 'X';

/*Append the li element variable with the delete button */

li.append('deleteButton');