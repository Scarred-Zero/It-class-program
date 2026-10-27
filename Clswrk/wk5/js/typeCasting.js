// Type Casting

const a = "5";
const b = 10;

// console.log(a + b);

const c = parseInt(a) + b;
// console.log(c);

// Implicit Casting [This is done automatically by the programming language]
let x = 5;
let y = 2.5;
let z = x + y;
// console.log(typeof x);
// console.log(typeof y);
// console.log(z);

// Explicit Casting [This is done manually by the programmer]
let u = "9";
let i = Number(u); // Explicit casting with the Number function
// console.log(i);

// Real-World example
const maxScore = 500;
const userScore = 432;
// Convert userScore to number (it already is,  but ensures float division)
const percentage = (Number(userScore) / maxScore) * 100.0;

// console.log("User's percentage is: " + percentage.toFixed(3));
