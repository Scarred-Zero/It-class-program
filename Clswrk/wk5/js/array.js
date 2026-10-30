const arr = [1, 2, 3, 4, 5];

// console.log("// Traditional Loop");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(`${arr[i]}, is an even number`);
//     }
// }

// console.log("// ForOf Loop");
// for (const num of arr) {
//     if (num % 2 === 0) {
//         console.log(`${num}, is an even number`);
//     }
// }

// console.log("// ForEach Loop");
// arr.forEach((num) => {
//     if (num % 2 === 0) {
//         console.log(`${num}, is an even number`);
//     }
// });


// Updating the array using indices(index) position
arr[0] = "BMW";
arr[1] = "Volvo";
arr[2] = "Bugatti";
arr[3] = "Pagani";
arr[4] = "Porsche";

const lengthCount = arr.length;
const indexCount = arr.length - 1;
console.log("The length of the array is:",lengthCount);
console.log("The index count of the array is:",indexCount);

// Methods in Array => push(), pop(), unshift(), shift(), splice().

// push() => Appends one or more elements to the end of an array and returns the new length.
console.log("\n");
console.log("Before push():", arr);
// arr.push({name:"Alex", age: 19}, 8, 9,7, [1, 2, 3], 6,5);
arr.push("Ferrari");
console.log("After push():", arr);
console.log("\n");

// pop() => Removes the last element from an array and returns that removed element.
console.log("Before pop():", arr);
arr.pop();
console.log("After pop():", arr);
console.log("\n");

// unshift() => Adds one or more elements to the beginning of an array.
console.log("Before unshift():", arr);
arr.unshift(6);
console.log("After unshift():", arr);
console.log("\n");

// shift() => Removes the first element from an array and returns it.
console.log("Before shift():", arr);
arr.shift();
console.log("After shift():", arr);
console.log("\n");

// splice() => Adds, removes, or replaces elements at a specified index (e.g., `array.splice(start: index, delecteCount: 1)` deletes 1 item).
console.log("Before splice():", arr);
arr.splice(3, 1); // Begins at the 'third' index and deletes only that item at that index.
arr.splice(1, 2); // Begins at the 'first' index and deletes only 'two' items from that index positon.
arr.splice(2); // Begins at the 'second' index and deletes all the remaining items left in the array.
console.log("After splice():", arr);

// Using the 'new' keyword with the Array constructor
console.log("\n");

const arr2 = new Array("Harry Kane", "Lamine Yamal", "Kylian Mbappe");
console.log("Array 2:", arr2);

const firstItemInArr2 = arr2[0];
console.log(firstItemInArr2);

const thirdItemInArr2 = arr2[2];
console.log(thirdItemInArr2);

// JSON
// Objects use the double quotation symbol only for the string values.
const obj = {
    name: "Alex",
    age: 19,
    gender: "male",
};

// JSON uses the double quotation symbol for the keys and string values
const json = {
    name: "Alex",
    age: 19,
    gender: "male",
};

const activeBoardState = [
    { id: 1, title: "Refactor CSS", status: "todo" }, // object
    { id: 2, title: "Refactor HTML", status: "todo" }, // object
    { id: 3, title: "Refactor JS", status: "in_progress" }, // object
];
// Serialize to JSON string
const jsonString = JSON.stringify(activeBoardState);
console.log(jsonString);
// Deserialize JSON string to an object
const restoredState = JSON.parse(jsonString);
console.log(restoredState);
console.log(restoredState[0].title);
console.log(restoredState[1].title);
console.log(restoredState[2].title);
