/**
 * JAVASCRIPT OBJECTS AND STRING METHODS
 *
 * This lecture covers two important JavaScript topics:
 * 1. Objects - collections of related data and functionality
 * 2. String methods - built-in functions to manipulate strings
 */

/**
 * PART 1: JAVASCRIPT OBJECTS
 *
 * Objects are collections of key-value pairs where:
 * - Keys are strings (or Symbols)
 * - Values can be any data type (strings, numbers, booleans, arrays, other objects, functions)
 */

// Example of a JavaScript object
let person = {
  email: "john@example.com",
  name: "John",
  job: "Developer",
  age: 30,
  favoriteMovies: ["Inception", "The Matrix", "Interstellar"],
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA",
  },
  // Objects can also contain methods (functions)
  greet: function () {
    return "Hello, my name is " + this.name;
  },
};

// Accessing object properties using dot notation
console.log("Name:", person.name);
console.log("Email:", person.email);
console.log("Job:", person.job);
console.log("Age:", person.age);
console.log("City:", person.address.city);

// Accessing object properties using bracket notation
// This is useful when the property name is stored in a variable
// or when the property name has special characters
console.log("Using bracket notation:", person["name"]);

// Modifying object properties
person.email = "john.doe@example.com";
console.log("Updated email:", person.email);

// Adding new properties to an object
person.phoneNumber = "555-1234";
console.log("Added phone number:", person.phoneNumber);

// Calling an object method
console.log(person.greet());

console.log("-------------------");

/**
 * PART 2: STRING METHODS
 *
 * JavaScript provides many built-in methods to manipulate strings.
 */

let myString = "JavaScript is fun";

// length - returns the number of characters in a string
console.log("String length:", myString.length);

// at() - returns the character at a specified index
console.log("Character at index 0:", myString.at(0));
console.log("Character at index 4:", myString.at(4));

// toUpperCase() - converts a string to uppercase
console.log("Uppercase:", myString.toUpperCase());

// toLowerCase() - converts a string to lowercase
console.log("Lowercase:", myString.toLowerCase());

// concat() - joins two or more strings
console.log("Concatenated:", myString.concat(" and powerful!"));

// endsWith() - checks if a string ends with specified characters
console.log("Ends with 'fun':", myString.endsWith("fun"));
console.log("Ends with 'code':", myString.endsWith("code"));

// includes() - checks if a string contains a specified value
console.log("Includes 'Script':", myString.includes("Script"));

// slice() - extracts a part of a string
console.log("First 4 characters:", myString.slice(0, 4));

// indexOf() - returns the position of the first occurrence of a value
console.log("Position of 'is':", myString.indexOf("is"));

// lastIndexOf() - returns the position of the last occurrence of a value
let sentence = "A quick brown fox jumps over a lazy dog a";
console.log("Last occurrence of 'a':", sentence.lastIndexOf("a"));

// trim(), trimStart(), trimEnd() - removes whitespace
let spacedString = "   Hello World   ";
console.log("Trimmed:", spacedString.trim());
console.log("Trim start:", spacedString.trimStart());
console.log("Trim end:", spacedString.trimEnd());

/**
 * PRACTICAL EXAMPLE: Checking for special characters
 */
console.log("\nPRACTICAL EXAMPLE: Checking for special characters");

let text = "Hello! How are you?";
let specialCharacters = ["!", "@", "#", "$", "%", "?"];
let includesSpecialCharacter = false;

// More efficient approach using string methods
for (let i = 0; i < specialCharacters.length; i++) {
  if (text.includes(specialCharacters[i])) {
    includesSpecialCharacter = true;
    console.log("Found special character:", specialCharacters[i]);
    // We could break here, but let's find all special characters
  }
}

console.log("Text contains special characters:", includesSpecialCharacter);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Create an object representing a car with properties like make, model, year, and color
 * 2. Write code to count how many vowels are in a string
 * 3. Create a function that converts a string to title case (first letter of each word capitalized)
 */
