// Assignment 1: Shopping Total

// *Topics Covered: Numbers, Typecasting, If Statements, Operators*
// Scenario: You are writing the code for a simple cash register application.

// • Step 1: Create a string variable called priceStr = "25". Convert (typecast) this string into a regular number and save it in a new variable called price.

// • Step 2: Create a number variable called quantity = 3. Multiply price by quantity to get your subtotal.

// • Step 3: Write an if / else statement. If the subtotal is greater than 50, subtract a 5 dollar discount from it. Otherwise, leave it as is. Print the final amount to the console.

// const priceStr = "25";
// const price = Number(priceStr);
// const quantity = 3;
// let subTotal = price * quantity;

// if (subTotal > 50) {
//     subTotal -= 5;
// } else {
//     subTotal;
// }

// let finalAmount = subTotal;
// console.log("Your final amount is: " + finalAmount);
// console.log("Your final amount is:", finalAmount);

// Assignment 3: The Number Counter

// *Topics Covered: For Loops, If Statements, Operators*
// Scenario: You want to print a list of numbers but mark which ones are even.
// • Step 1: Write a standard for loop that starts at 1 and counts up to (and includes) 10. Make it increase by 1 on each step.
// for () {
// }

// • Step 2: Inside the loop, use an if statement with the remainder operator (%) to check if the current number is even (number % 2 === 0).

// • Step 3: If the number is even, print "X is even" (replace X with the number). If it is odd, just print the number by itself.

for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number}`);
    }
}


// Assignment 4: Movie Ticket Pricing

// *Topics Covered: Conditionals (if / else if / else), Logical Operators*
// Scenario: You are calculating the cost of a movie ticket based on a person's age.

// • Step 1: Create a variable called age and set it to any number you want (e.g., 12).

// • Step 2: Write an if / else if / else structure to check these rules:
// 	• If age is less than 5 OR age is greater than or equal to 65, print "Ticket is Free".
// 	• Else if age is between 5 and 17 (inclusive), print "Ticket is $5".
// 	• Else (for everyone else), print "Ticket is $10".

const age = 27;

if (age < 5 || age >= 65) {
  console.log("Ticket is free");
} else if (age >= 5 && age <= 17) {
  console.log("Ticket is $5");
} else {
  console.log("Ticket is $10,000,000")
}