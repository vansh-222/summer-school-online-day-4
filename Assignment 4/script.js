// ✅ 1. Variable and Data Types
var myString = "Vansh";
let myNumber = 63;
const myBoolean = true;
let myUndefined;
let myNull = null;

console.log("String:", typeof myString);
console.log("Number:", typeof myNumber);
console.log("Boolean:", typeof myBoolean);
console.log("Undefined:", typeof myUndefined);
console.log("Null:", typeof myNull);


// ✅ 2. Hoisting Demo
console.log("Using var:");
console.log(a);
var a = 5;

console.log("Using let:");
let b = 7;
/*
 Explanation:
- Because 'var' is hoisted and initialized as undefined.
- Because 'let' is hoisted but not initialized, accessing before declaration throws error.
*/


// ✅ 3. User Greeting (Conditionals)
let userName = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

if (age < 18) {
    alert(`Hey ${userName}, you're a not adult!`);
} else if (age >= 18 && age <= 60) {
    alert(`Welcome ${userName}, you're an adult!`);
} else {
    alert(`Hello ${userName}, you're a senior citizen!`);
}


// ✅ 4. Looping Numbers
console.log("For loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("While loop (even numbers 2 to 20):");
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

console.log("Do...while loop (10 to 1):");
let k = 10;
do {
    console.log(k);
    k--;
} while (k >= 1);


// ✅ 5. Functions
function add(a, b) {
    return a + b;
}

const square = function (n) {
    return n * n;
};

const greet = (name) => `Hello, ${name}!`;

console.log("Sum:", add(5, 3));
console.log("Square:", square(4));
console.log(greet("Vansh"));


//  ✅ 6. Callback Practice
function processNumber(num, callback) {
    return callback(num);
}
function squares(n) {
    return n * n;
}
console.log(processNumber(7, squares));


// BONUS: Simple Web Calculator
let number1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Choose operation (+, -, *, /):");
let number2 = parseFloat(prompt("Enter second number:"));
let result;

if (isNaN(number1) || isNaN(number2)) {
    alert("Not valid input");
} else {
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
            break;
        default:
            result = "not valid operator";
    }
    alert(`Result: ${result}`);
}