// If statement

// Find the even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of nums) {
    if (num % 2 === 0) {
        // Using the Modulus operator "%" to find the remainder of the calculation
        console.log("The number: " + num + " is an even number");
    }
}

// Role the Dice
const dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a " + dice);

if (dice == 6) {
    console.log("You got a 6!!")
} else {
    console.log("Try again")
}

// Verify Adult
const ageRequired = 18;
const userInput = 16;

if (userInput < ageRequired) {
    console.log("You're not an adult")
} else {
    console.log("You're an adult.")
}

// Verify Adult and Teenagers
const userInput2 = 16;

if (userInput2 < 13) {
    console.log("You're a child")
} else if (userInput2 < 20) {
    console.log("You're a Teenager.")
} else {
    console.log("You're an adult")
}

