/**
 * JAVASCRIPT FUNCTIONS
 *
 * Functions are reusable blocks of code that perform specific tasks.
 * They help organize code, reduce repetition, and make code more maintainable.
 */

/**
 * dynamicAddition - A function that calculates the sum of all numbers in an array
 *
 * @param {number[]} numberArray - An array of numbers to be added together
 * @returns {number} - The sum of all numbers in the array
 */
function dynamicAddition(numberArray) {
  // Initialize sum variable to store the running total
  let sum = 0;

  // Loop through each element in the array
  for (let i = 0; i < numberArray.length; i++) {
    // Add current element to the running sum
    sum = sum + numberArray[i];
    // Alternative syntax: sum += numberArray[i];
  }

  // Return the final sum after processing all elements
  return sum;
}

// Example usage: Call the function with an array of numbers
let total = dynamicAddition([2, 43, 65, 5, 656, 6, 3453]);

// Output the result to the console
console.log("Sum of all numbers:", total);

/**
 * ALTERNATIVE APPROACH WITHOUT FUNCTIONS
 *
 * The commented code below shows how we would perform the same task
 * without using a function. Notice how functions make our code more
 * reusable and easier to understand.
 */

// let array = [1, 5, 23, 6, 4, 64];
// let sum = 0;
// for (let i = 0; i < array.length; i += 1) {
//   sum = sum + array[i];
// }
// console.log("Sum without using function:", sum);

/**
 * PRACTICE EXERCISES:
 *
 * 1. Try creating a function that finds the average of numbers in an array
 * 2. Create a function that finds the largest number in an array
 * 3. Create a function that counts how many even numbers are in an array
 */
