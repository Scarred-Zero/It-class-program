//  Strings


const first = "John";
const last = "Doe";
// console.log(typeof first)
// console.log(typeof last)

const message = first + " " + last;
// console.log("Fullname: ", message);


// Sequence of characters
const txt = 'Hello World';
const lengthOfString = txt.length;
// console.log("The text " + txt + " is made up of " + `${lengthOfString}` + " " + "characters!!!!")

// console.log(txt[4]);


for (let c = 0; c < txt.length; c++) {
    const element = txt[c];
    // console.log(element);
}

// Common String Operations 
// console.log(txt)
// console.log(txt.toUpperCase());   // HELLO WORLD
// console.log(txt.toLowerCase());   // hello world
// console.log(txt.includes("World"));  // true
// console.log(txt.replace("World", "JavaScript"));  


const identity = "Jane";
const greeting =  "Hello " + identity + "." + " Nice to meet you";
// console.log(greeting)