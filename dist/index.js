"use strict";
// - Here is a typeScript code that I wrote and comments to explain the code
var isCompleted = true;
var isPending = false;
// - If compleated it's true, if it's pending it's false
var numberArray = [1, 2, 3, 4, 5];
// - A list of numbers
var booleanArray = [true, false, true, true];
// - A list of true and false statements = they are called boolean
var num1 = 10;
var num2 = 5;
// - num1 is 10, num2 is 5
var sum = num1 + num2;
var difference = num1 - num2;
// - sum is 10+5
// - diffrence is 10-5
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
// - A string is  one or more characters can be letters, numbers, or symbols, always inside ""
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
console.log("Sum: ".concat(sum)); // - = 15
console.log("Difference: ".concat(difference)); // - = 5
console.log("Full Name: " + fullName); // - John doe
