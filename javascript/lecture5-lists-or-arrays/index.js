/**
 * JAVASCRIPT ARRAYS
 *
 * Arrays are ordered collections of values that can be of any type.
 * They are used to store multiple values in a single variable.
 */

// Creating an array of names (string values)
let names = ["Ali", "Khan", "Ahmad", "Asad", "John", "Jane", "Josh"];

// Displaying the entire array
console.log("Full array:", names);

/**
 * ACCESSING ARRAY ELEMENTS
 *
 * Array elements are accessed using their index (position).
 * The first element has index 0, the second has index 1, and so on.
 */
console.log("\nAccessing individual elements:");
console.log("First element (index 0):", names[0]); // Ali
console.log("Second element (index 1):", names[1]); // Khan
console.log("Third element (index 2):", names[2]); // Ahmad

// Accessing the last element
console.log("Last element:", names[names.length - 1]); // Josh

/**
 * ARRAY LENGTH
 *
 * The length property returns the number of elements in an array.
 */
console.log("\nArray length:", names.length); // 7

/**
 * ITERATING THROUGH ARRAYS
 *
 * We can use loops to iterate through all elements in an array.
 */
console.log("\nIterating through the array with a for loop:");
for (let i = 0; i < names.length; i++) {
  console.log(`Index ${i}: ${names[i]}`);
}

/**
 * ARRAY METHODS
 *
 * JavaScript arrays have many built-in methods to manipulate them.
 */

// Creating a new array of numbers
let numbers = [10, 20, 30, 40, 50];

// push() - adds one or more elements to the end of an array
console.log("\nAdding elements with push():");
numbers.push(60);
console.log(numbers); // [10, 20, 30, 40, 50, 60]

// pop() - removes the last element from an array
console.log("\nRemoving the last element with pop():");
let lastElement = numbers.pop();
console.log("Removed element:", lastElement); // 60
console.log("Array after pop():", numbers); // [10, 20, 30, 40, 50]

// unshift() - adds one or more elements to the beginning of an array
console.log("\nAdding elements to the beginning with unshift():");
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40, 50]

// shift() - removes the first element from an array
console.log("\nRemoving the first element with shift():");
let firstElement = numbers.shift();
console.log("Removed element:", firstElement); // 5
console.log("Array after shift():", numbers); // [10, 20, 30, 40, 50]

// indexOf() - returns the first index at which a given element can be found
console.log("\nFinding element index with indexOf():");
console.log("Index of 30:", numbers.indexOf(30)); // 2
console.log("Index of 100:", numbers.indexOf(100)); // -1 (not found)

// slice() - returns a shallow copy of a portion of an array
console.log("\nExtracting a portion with slice():");
let slicedArray = numbers.slice(1, 4);
console.log("Sliced array (index 1 to 3):", slicedArray); // [20, 30, 40]
console.log("Original array remains unchanged:", numbers); // [10, 20, 30, 40, 50]

// Different types of data in arrays
let mixedArray = ["string", 42, true, { name: "Object" }, [1, 2, 3]];
console.log("\nMixed data types in an array:", mixedArray);

/**
 * PRACTICAL EXAMPLE
 */
let ages = [24, 45, 35, 18, 22, 16, 57];
let adultCount = 0;

console.log("\nPractical example - counting adults:");
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adultCount++;
  }
}

console.log("Number of adults:", adultCount);
console.log("Number of minors:", ages.length - adultCount);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Create an array of your favorite foods
 * 2. Write code to find the largest number in an array of numbers
 * 3. Create a function that reverses an array without using the built-in reverse() method
 */
