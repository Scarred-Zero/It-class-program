// 🚀 JAVASCRIPT ASSIGNMENT:
// The Smart Utility Bill Calculator
// Goal: Build a simple program that takes raw user data (as text strings), converts it to numbers, checks usage rates, updates a user object, and prints a final receipt!

// TOPICS COVERED:
// • Strings & Numbers
// • Typecasting (parseFloat)
// • If / Else Statements
// • Objects
// • Loops
// • Template Literals
// • Basic Functions

// STEP-BY-STEP INSTRUCTIONS
// Step 1: Create the User Profile (Objects)
// • Create an object named customer.
// • Add properties: name (string like "Alex"), isPremium (boolean), and loyaltyPoints (number set to 0).

const customer = {
    name: "Alex",
    isPremium: true,
    loyaltyPoints: 0,
};

// Step 2: Convert Input Data (Typecasting)
// • Copy these two string variables into your code:
// let rawUnits = "120.5"
// let rawTax = "0.05"
// • Use parseFloat() to convert both strings into numbers. Save them in new variables called units and taxRate.

let rawUnits = "120.5";
let rawTax = "0.05";
const units = parseFloat(rawUnits);
const taxRate = parseFloat(rawTax);

// Step 3: Find the Rate (If Statements)
// • Create a variable called rate.
// • Use if / else logic to set the rate:
// → If units is less than 100, the rate is 0.10
// → If units is 100 or more, the rate is 0.15
// • Multiply units by rate to calculate your subtotal.

let rate;
if (units < 100) {
    rate = 0.1;
} else {
    rate = 0.15;
}

const subtotal = units * rate;

// Step 4: Calculate the Total (Functions)
// • Create a function called getTotal. Pass it three inputs: subtotal, taxRate, and isPremium.
// • Inside the function:
// → If isPremium is true, subtract 5 dollars from the subtotal.
// → Multiply the subtotal by taxRate to find the tax.
// → Return the final answer (subtotal + tax).

const getTotal = (subtotal, taxRate, isPremium) => {
    console.log(subtotal);
    console.log(taxRate);
    console.log(isPremium);
    if (isPremium === true) {
        console.log(subtotal); //18.075
        console.log(isPremium); // true
        subtotal -= 5;
        console.log(subtotal); //13.075
    }
    console.log(subtotal); //13.075
    console.log(taxRate); // 0.05
    let tax = subtotal * taxRate;
    console.log(subtotal); //13.075
    console.log(taxRate); // 0.05
    console.log(tax); // 0.65375  (subtotal[13.075] * taxRate[0.05])
    const totalBill = tax + subtotal;
    console.log(tax); // 0.65375
    console.log(subtotal);  // 13.075
    console.log(totalBill);  // 13.72875 (tax + subtotal)
    return totalBill.toFixed(2);
};


// Step 5: Add Rewards (Loops)
// • For every full 50 units used, the user gets 10 points.
// • Use a loop to count how many blocks of 50 are in your units variable.
// • Add those points to your customer.loyaltyPoints balance.

let blocksOfFifty = 2;
for (let usedUnits = 150; usedUnits <= units; usedUnits += 50) {
    blocksOfFifty++;
}
customer.loyaltyPoints += blocksOfFifty * 10;

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// • Use backticks (`) to log a clean receipt to the console showing:
// → The customer's name in UPPERCASE (.toUpperCase())
// → Total units used
// → Final bill amount
// → New loyalty points balance

console.log(
    `=== ENERGY BILL ===\nCustomer: ${customer.name.toUpperCase()}\nUnits Used: ${units}\nTotal Bill: $${getTotal(subtotal, taxRate, customer.isPremium)} \nPoints Earned: ${customer.loyaltyPoints}\n===================`,
);

// 🧪 EXPECTED OUTPUT EXAMPLE:
// === ENERGY BILL ===
// Customer: ALEX
// Units Used: 120.5
// Total Bill: $13.73
// Points Earned: 20
// ===================
