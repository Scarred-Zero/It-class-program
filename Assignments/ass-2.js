// JavaScript Assignment: The Pet Store Tracker

//  *Objective*

// Learn how to create Objects, organize them in Arrays, and convert them to JSON.

//  *Task 1: Create a List of Pets (Arrays & Objects)*

// Goal: Create a simple database of pets using objects inside an array.
// • Step 1: Create an array named petStore.
// • Step 2: Inside this array, add three pet objects.
// • Step 3: Each pet object needs exactly three properties:
// 	• name (a string, e.g., "Max")
// 	• species (a string, e.g., "Dog")
// 	• age (a number, e.g., 3)

//  *Task 2: Find and Update a Pet (Array & Object Manipulation)*

// Goal: Access a specific item in your array and change its details.
// • Step 1: Write a line of code that changes the age of the first pet in your array to a different number.
// • Step 2: Write a function named findDogs().
// • Step 3: Inside this function, use a loop (or the .filter() method) to loop through petStore and return a new list containing only the pets where species is "Dog".

//  *Task 3: Send Data to the Server (JSON Operations)*

// Goal: Turn your JavaScript data into a JSON string so it can be sent over the web.
// • Step 1: Create a variable named petStoreJSON.
// • Step 2: Use JSON.stringify() to convert your petStore array into a JSON string, and save it inside your petStoreJSON variable.
// • Step 3: Use console.log(petStoreJSON) to print out the final result and see how it looks.

const petStore = [
    {
        name: "Max",
        species: "Dog",
        age: 3,
    },
    {
        name: "Luna",
        species: "Cat",
        age: 2,
    },
    {
        name: "Charlie",
        species: "Bird",
        age: 1,
    },
    {
        name: "Kane",
        species: "Dog",
        age: 7,
    },
];

petStore[0].age = 5;

function findDogs() {
    return petStore.filter((pet) => pet.species.toLowerCase() === "dog");

}
console.log(findDogs());

let petStoreJSON = JSON.stringify(petStore);

console.log(petStoreJSON);



const resolved = JSON.parse(petStoreJSON);
console.log(resolved);
