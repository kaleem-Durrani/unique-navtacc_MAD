/**
 * JAVASCRIPT BASICS - PART 2
 *
 * This lecture covers:
 * 1. JavaScript Operators
 * 2. Data Types
 * 3. Variables
 * 4. String Concatenation and Template Literals
 * 5. Variable Swapping
 */

/**
 * ARITHMETIC OPERATORS
 *
 * JavaScript provides several operators for performing mathematical calculations.
 */
console.log("ARITHMETIC OPERATORS:");

// Addition (+)
console.log("Addition: 23 + 6 =", 23 + 6); // 29

// Subtraction (-)
console.log("Subtraction: 23 - 6 =", 23 - 6); // 17

// Multiplication (*)
console.log("Multiplication: 23 * 6 =", 23 * 6); // 138

// Division (/)
console.log("Division: 23 / 6 =", 23 / 6); // 3.8333...

// Exponentiation (**) - Raises the first operand to the power of the second
console.log("Exponentiation: 3 ** 5 =", 3 ** 5); // 3^5 = 243

// Modulus (%) - Returns the remainder of a division
console.log("Modulus: 8 % 3 =", 8 % 3); // 2 (remainder of 8 ÷ 3)
console.log("Modulus: 10 % 2 =", 10 % 2); // 0 (remainder of 10 ÷ 2)

/**
 * DATA TYPES
 *
 * JavaScript has several built-in data types:
 * 1. String - Text values
 * 2. Number - Numeric values
 * 3. Boolean - true or false
 * 4. Undefined - A variable that has been declared but not assigned a value
 * 5. Null - Represents the intentional absence of any value
 * 6. Object - Collections of related data
 * 7. Symbol - Unique and immutable primitive values
 */
console.log("\nDATA TYPES:");

// String
console.log("String example:", "hello");
console.log("Type of 'hello':", typeof "hello");

// Number
console.log("Number example:", 25);
console.log("Type of 25:", typeof 25);

// Boolean
console.log("Boolean example:", true);
console.log("Type of true:", typeof true);

/**
 * VARIABLES
 *
 * Variables are containers for storing data values.
 * In JavaScript, we declare variables using:
 * - let: for variables that can be reassigned
 * - const: for variables that cannot be reassigned
 * - var: older way to declare variables (not recommended for modern code)
 */
console.log("\nVARIABLES:");

// Declaring variables with let
let name = "John";
let age = 25;
let isStudent = true;

console.log("Name:", name);
console.log("Type of name:", typeof name);

console.log("Age:", age);
console.log("Type of age:", typeof age);

console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

// Reassigning variables
console.log("\nREASSIGNING VARIABLES:");
console.log("Original age:", age); // 25

age = 30;
console.log("After first reassignment:", age); // 30

// JavaScript is dynamically typed - variables can change types
age = "thirty";
console.log("After changing type to string:", age); // "thirty"

age = 25; // Change back to a number for later examples
console.log("Back to number:", age); // 25

/**
 * STRING CONCATENATION AND TEMPLATE LITERALS
 *
 * There are multiple ways to combine strings in JavaScript.
 */
console.log("\nSTRING CONCATENATION AND TEMPLATE LITERALS:");

// Traditional concatenation with + operator
console.log("Traditional concatenation:");
console.log(
  "My name is: " +
    name +
    ", my age is: " +
    age +
    ", my student status is: " +
    isStudent
);

// Template literals (introduced in ES6) - more readable
console.log("\nTemplate literals:");
console.log(
  `My name is ${name}, my age is ${age}, my student status is ${isStudent}`
);

/**
 * VARIABLE SWAPPING
 *
 * Sometimes we need to swap the values of two variables.
 */
console.log("\nVARIABLE SWAPPING:");

// Initial values
let a = 5;
let b = 4;
console.log("Initial values - a:", a, "b:", b);

// Method 1: Using a temporary variable
console.log("\nMethod 1: Using a temporary variable");
let temp = a;
a = b;
b = temp;
console.log("After swap - a:", a, "b:", b);

// Reset values for next example
a = 5;
b = 4;
console.log("\nReset values - a:", a, "b:", b);

// Method 2: Using arithmetic operations (without a third variable)
console.log("Method 2: Without a temporary variable");
a = a + b; // a = 9 (5 + 4)
b = a - b; // b = 5 (9 - 4)
a = a - b; // a = 4 (9 - 5)
console.log("After swap - a:", a, "b:", b);

// Method 3: Modern JavaScript using destructuring (ES6)
a = 5;
b = 4;
console.log("\nReset values - a:", a, "b:", b);

console.log("Method 3: Using destructuring assignment");
[a, b] = [b, a];
console.log("After swap - a:", a, "b:", b);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Create variables for your name, age, and favorite color
 * 2. Calculate the area of a rectangle with length 10 and width 5
 * 3. Check if a number is even or odd using the modulus operator
 */
