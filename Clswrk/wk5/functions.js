// Functions are reusable block of codes that are designed to perform a particular task.
// For a function to run, we must invoke or call the function.

function myFunc() {
    return "Hello, Bob";
}
console.log(myFunc());

function greetFunc(name) {
    const greeting = "Hello, " + name;
    return greeting;
}
console.log(greetFunc("Jane"));

function addTwoNums(a = 5, b = 6) {
    const sum = a + b;
    const output = "Sum: " + sum;
    // console.log("The data type is:", typeof sum);
    return output;
}
console.log(addTwoNums(2, 3));

// Passing functions as variables
function divisionOfTwoNumbers(a, b) {
    const division = a / b;
    return division;
}

const story =
    "On a shelf in a house, there was a bundle of $10,000 to be shared amongst 4 thieves. If shared equally, how much should each thief go home with?";

const answer =
    "Answer: Each thief would go home with " +
    "$" +
    divisionOfTwoNumbers(10000, 4);

console.log(story);
console.log(answer);

const mySquare = (x) => {
    const square = x * x;
    return square;
};
console.log("The sqaure of the number is: ", mySquare(12));

// Find the cube of the number
const theCube = (g) => {
    const cube = g * g * g;
    return cube;
};

console.log("The cube of the number is: ", theCube(2));

// Sum all the numbers
const list = [1, 123, 500, 125, 44];

function sumAll(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return "The sum of all the numbers is: " + sum;
}

console.log(sumAll(list));

// Find the max number
const maxNum = (arr) => {
    let max = -Infinity;
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return "The max number of all the numbers is: " + max;
};

console.log(maxNum(list));

// Find the Min number

const minNumber = (arr) => {
    let min = Infinity;
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return "The minimum number is: " + min;
};

console.log(minNumber(list));
