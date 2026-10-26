// Assignment 2: Welcome Banner Creator

// *Topics Covered: Strings, Datatypes, Functions*
// Scenario: You want to make a function that greets users when they log into your website.
// • Step 1: Create three variables to practice datatypes: firstName = "Alex", age = 19, and isLoggedIn = true. Use console.log(typeof ...) on each to see their types.
// • Step 2: Create a function named sayHello. It should accept two parameters: name and userAge.
// • Step 3: Inside the function, make it return a sentence combining the values. For example: "Hello Alex, you are 19 years old!". Call the function with your variables and print the result.

const firstName = "Alex";
const age = 19;
const isLoggedIn = true;

const sayHello = (name, userAge) => {
    return `Hello ${name}, you are ${userAge} years old!`;
};

// console.log(sayHello(firstName, age));

// Build a utility function that groups and counts tasks by their engineering category.

// Assignment Requirements
// Write a function named getCategoryTaskCounts(tasksArray) using either traditional or arrow function syntax.
// The function must iterate through the task database and return an object tracking how many tasks exist for each category (e.g., `{ frontend: 1, backend: 2, database: 1, devops: 1 }`).
// Output the resulting summary object to the browser console using `console.table()`.

const taskDb = [
    {
        id: 101,
        category: "frontend",
    },
    {
        id: 102,
        category: "backend",
    },
    {
        id: 103,
        category: "frontend",
    },
    {
        id: 104,
        category: "devops",
    },
    {
        id: 105,
        category: "database",
    },
];

function getCategoryTaskCounts(taskArray) {
    const frontendCount = [];
    const backendCount = [];
    const devopsCount = [];
    const databaseCount = [];

    for (const task of taskArray) {
        const normalisedCategory = task.category.toLowerCase();
        switch (normalisedCategory) {
            case "frontend":
                frontendCount.push(task);
                break;

            case "backend":
                backendCount.push(task);
                break;

            case "devops":
                devopsCount.push(task);
                break;

            case "database":
                databaseCount.push(task);
                break;

            default:
                console.log("The category " + `'${normalisedCategory}'` + " does not exist within the database");
                break;
        }
    }

    const categoryObj = {
        frontend: frontendCount.length,
        backend: backendCount.length,
        devops: devopsCount.length,
        database: databaseCount.length,
    }
    return categoryObj;
}

console.table(getCategoryTaskCounts(taskDb));
