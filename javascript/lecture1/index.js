/**
 * JAVASCRIPT BASICS - PART 1
 *
 * This is the first lecture on JavaScript, covering:
 * 1. The console.log() function
 * 2. Basic variable declaration
 * 3. Primitive data types
 */

/**
 * CONSOLE.LOG()
 *
 * The console.log() function is used to output messages to the browser's console.
 * It's one of the most basic debugging tools in JavaScript.
 */

// Printing a simple message
console.log("Hello, World!");

// You can print multiple messages
console.log("Welcome to JavaScript!");
console.log("This is our first lecture");

/**
 * VARIABLES
 *
 * Variables are containers for storing data values.
 * In JavaScript, we use 'let', 'const', or 'var' to declare variables.
 *
 * - let: declares a block-scoped variable that can be reassigned
 * - const: declares a block-scoped variable that cannot be reassigned
 * - var: older way to declare variables (function-scoped, not recommended for modern code)
 */

// Declaring a variable to store a name (string)
let myName = "John";

// Declaring a variable to store an age (number)
let myAge = 24;

// Declaring a variable to store a student status (boolean)
let isStudent = true;

/**
 * OUTPUTTING VARIABLES
 *
 * We can use console.log() to display the values of variables.
 */

// Printing each variable individually
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// Printing multiple variables at once
console.log("All information:", myName, myAge, isStudent);

/**
 * DATA TYPES
 *
 * JavaScript has several built-in data types:
 *
 * Primitive Data Types:
 * - String: represents text data (e.g., "Hello")
 * - Number: represents numeric values (e.g., 42, 3.14)
 * - Boolean: represents logical values (true or false)
 * - Undefined: represents a variable that has been declared but not assigned a value
 * - Null: represents the intentional absence of any value
 * - Symbol: represents a unique and immutable value
 * - BigInt: represents integers larger than the Number type can handle
 *
 * Complex Data Type:
 * - Object: represents a collection of related data
 */

// Examples of different data types
let greeting = "Hello"; // String
let score = 95; // Number
let isPassed = true; // Boolean
let notDefined; // Undefined
let emptyValue = null; // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = BigInt(9007199254740991); // BigInt

// Printing the data types
console.log("\nDATA TYPES:");
console.log("greeting:", greeting, "- Type:", typeof greeting);
console.log("score:", score, "- Type:", typeof score);
console.log("isPassed:", isPassed, "- Type:", typeof isPassed);
console.log("notDefined:", notDefined, "- Type:", typeof notDefined);
console.log("emptyValue:", emptyValue, "- Type:", typeof emptyValue);
console.log("uniqueId:", uniqueId.toString(), "- Type:", typeof uniqueId);
console.log("bigNumber:", bigNumber, "- Type:", typeof bigNumber);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Create variables for your name, age, and favorite hobby
 * 2. Print these variables to the console
 * 3. Try creating variables of different data types and print their types
 */
