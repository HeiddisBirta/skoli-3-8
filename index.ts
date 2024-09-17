// - Here is a typeScript code that I wrote and comments to explain the code
const isCompleted: boolean = true;
const isPending: boolean = false;
// - If compleated it's true, if it's pending it's false

const numberArray: number[] = [1, 2, 3, 4, 5];
// - A list of numbers

const booleanArray: boolean[] = [true, false, true, true];
// - A list of true and false statements = they are called boolean

const num1: number = 10;
const num2: number = 5;
// - num1 is 10, num2 is 5

const sum = num1 + num2;
const difference = num1 - num2;
// - sum is 10+5
// - diffrence is 10-5

const firstName: string = "John";
const lastName: string = "Doe";
const fullName: string = firstName + " " + lastName;
// - A string is a sequence of one or more characters that may consist of letters, numbers, or symbols always inside ""
// - firstName is "John"
// - lastName is "Doe"
// - when we put them together it's "John Doe"

// - Below we se the outcome of the functions above in the terminal
console.log("\nBoolean true or false Values:"); // - \n means new line = so here we see a new line where it says Boolean true or false Values:
console.log("Is completed? " + isCompleted); // - = true
console.log("Is pending? " + isPending); // - = false

console.log("\nArray Values:"); // - = New line that says Array Values:
console.log("Number Array: " + numberArray); // - = 1,2,3,4,5
console.log("Boolean Array: " + booleanArray); // - = true,false,true,true

console.log("\nArithmetic Operations:"); // - = new line that says Arithmetic Operations:
console.log(`Sum: ${sum}`); // - = 15
console.log(`Difference: ${difference}`); // - = 5

console.log("Full Name: " + fullName); // - John doe

// - After I wrote this in the terminal: tsc .index.ts = that made a new javaScript file - we need to do this because the web
// doesn't understand typeScript but understands javaScript

// - Check my answers by typing node .index.js in the terminal :)
