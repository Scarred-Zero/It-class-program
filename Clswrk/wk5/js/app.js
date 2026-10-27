import './numbers.js'
import './strings.js'
import './typeCasting.js'
import './operators.js' 
import './ifStatments.js' 
import './functions.js'
import './test.js'
import './array.js'


// Data types
const a = 3; // Number
const b = "Banana"; // String ('Single Quotes' || "Double Quotes")
const c = 5.8; // Float
const bool = true; // Boolean (true || false)
const bob = [
    "Chad",
    567,
    67.998,
    true,
    [1, 2, 3, 4],
    [
        { name: "Ben", age: 23 },
        { name: "Mark", age: 21 },
    ],
]; // Array
const obj = {
    name: "Chad",
    age: 34,
    height: 192,
}; // Object

// console.log(obj.height + "cm");

// Global Variable
const x = 5;
let y = 67;
y = 6;

const userInput = "Balls";
const users = ["Zoe", 'Victory', "Tinubu"]
let ball1 = "Victory"
var ball2 = "Zoe"
const str = "Chibuzor"

// Scoped variable
function myNums() {
    const result = x + y;
    const x = 5;
    const y = 6;
    return (`x + y: `+ ( x + y));
}

// console.log(myNums());  // Scoped Variables
// console.log("x + y:", x + y); // Scoped Variables
