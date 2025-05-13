/**
 * JAVASCRIPT COMPARISON AND LOGICAL OPERATORS
 *
 * This lecture covers:
 * 1. Comparison operators (>, <, >=, <=, ==, ===, !=, !==)
 * 2. Logical operators (&&, ||, !)
 * 3. Conditional statements (if, else if, else)
 */

/**
 * COMPARISON OPERATORS
 *
 * Comparison operators compare two values and return a boolean result (true or false).
 */
console.log("COMPARISON OPERATORS:");

// Greater than (>)
console.log("5 > 4:", 5 > 4); // true

// Less than (<)
console.log("3 < 7:", 3 < 7); // true

// Greater than or equal to (>=)
console.log("5 >= 5:", 5 >= 5); // true

// Less than or equal to (<=)
console.log("4 <= 3:", 4 <= 3); // false

// Equal to (==) - compares values but not types
console.log("5 == 5:", 5 == 5); // true
console.log("5 == '5':", 5 == "5"); // true (different types but same value)

// Strict equal to (===) - compares both values and types
console.log("5 === 5:", 5 === 5); // true
console.log("5 === '5':", 5 === "5"); // false (different types)

// Not equal to (!=)
console.log("5 != 4:", 5 != 4); // true

// Strict not equal to (!==)
console.log("5 !== '5':", 5 !== "5"); // true (different types)

/**
 * PRACTICAL EXAMPLE: Comparing Ages
 */
let bobsAge = 15;
let janesAge = 20;

console.log("\nCOMPARING AGES:");
console.log("Is Bob younger than Jane?", bobsAge < janesAge); // true
console.log("Is Jane older than Bob?", janesAge > bobsAge); // true

/**
 * LOGICAL OPERATORS
 *
 * Logical operators are used to combine multiple conditions.
 */
console.log("\nLOGICAL OPERATORS:");

// AND (&&) - returns true if both conditions are true
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false

// OR (||) - returns true if at least one condition is true
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false

// NOT (!) - returns the opposite boolean value
console.log("!true:", !true); // false
console.log("!false:", !false); // true

/**
 * CONDITIONAL STATEMENTS
 *
 * Conditional statements execute different code blocks based on different conditions.
 */
console.log("\nCONDITIONAL STATEMENTS:");

/**
 * Example 1: Simple if-else statement to check if a number is odd or even
 */
let num = 15;
console.log(`Is ${num} odd?`, num % 2 === 1); // true

if (num % 2 === 1) {
  console.log(`${num} is odd`);
} else {
  console.log(`${num} is even`);
}

/**
 * Example 2: if-else if-else statement to check a number's range
 */
num = 25;
if (num > 50) {
  console.log(`${num} is greater than 50`);
} else if (num > 20) {
  console.log(`${num} is between 21 and 50`);
} else {
  console.log(`${num} is 20 or less`);
}

/**
 * COMBINING LOGICAL OPERATORS
 *
 * We can combine multiple conditions using logical operators.
 */
console.log("\nCOMBINING LOGICAL OPERATORS:");

/**
 * Example: Traffic fine calculation
 */
let carTint = "black";
let speed = 60;
let fine = 0;

// Check for illegal tint
if (carTint === "black") {
  fine = fine + 100;
  console.log("Fine for illegal tint: $100");
}

// Check for speeding
if (speed > 45) {
  fine = fine + 100;
  console.log("Fine for speeding: $100");
}

console.log("Total fine:", "$" + fine);

/**
 * NESTED CONDITIONALS VS. LOGICAL OPERATORS
 */
console.log("\nNESTED CONDITIONALS VS. LOGICAL OPERATORS:");

let height = 130;
let age = 19;

// Using nested conditionals
console.log("Using nested conditionals:");
if (height >= 120) {
  if (age >= 18) {
    console.log("You can take this ride (nested check)");
  } else {
    console.log("You are tall enough but too young for this ride");
  }
} else {
  console.log("You are not tall enough for this ride");
}

// Using logical AND (&&) - more concise
console.log("\nUsing logical AND (&&):");
if (height >= 120 && age >= 18) {
  console.log("You can take this ride (logical AND)");
} else {
  console.log("You cannot take this ride");
}

/**
 * PRACTICAL EXAMPLE: Grading System
 *
 * This example demonstrates how to use if-else if-else statements
 * with logical operators to implement a grading system.
 */
console.log("\nGRADING SYSTEM:");

let marks = 78;
let grade;

if (marks <= 100 && marks >= 85) {
  grade = "A";
} else if (marks < 85 && marks >= 75) {
  grade = "B";
} else if (marks < 75 && marks >= 65) {
  grade = "C";
} else if (marks < 65 && marks >= 50) {
  grade = "D";
} else if (marks >= 0 && marks < 50) {
  grade = "F";
} else {
  grade = "Invalid marks";
}

console.log(`Marks: ${marks}, Grade: ${grade}`);

// Test with invalid marks
marks = 123;
if (marks <= 100 && marks >= 85) {
  grade = "A";
} else if (marks < 85 && marks >= 75) {
  grade = "B";
} else if (marks < 75 && marks >= 65) {
  grade = "C";
} else if (marks < 65 && marks >= 50) {
  grade = "D";
} else if (marks >= 0 && marks < 50) {
  grade = "F";
} else {
  grade = "Invalid marks";
}

console.log(`Marks: ${marks}, Grade: ${grade}`);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Write a program that checks if a person can vote (age >= 18)
 * 2. Write a program that determines if a year is a leap year
 * 3. Write a program that calculates a discount based on purchase amount:
 *    - $100 or more: 10% discount
 *    - $500 or more: 15% discount
 *    - $1000 or more: 20% discount
 */
