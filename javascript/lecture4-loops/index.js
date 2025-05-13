/**
 * JAVASCRIPT LOOPS
 *
 * Loops are used to execute a block of code repeatedly until a specified condition is met.
 * They are essential for automating repetitive tasks and processing collections of data.
 */

/**
 * WHY USE LOOPS?
 *
 * Without loops, we would need to write repetitive code like this:
 */
console.log("WITHOUT LOOPS - Printing numbers 1 to 5:");
let i = 1;
console.log(i); // 1
i += 1;
console.log(i); // 2
i += 1;
console.log(i); // 3
i += 1;
console.log(i); // 4
i += 1;
console.log(i); // 5

/**
 * TYPES OF LOOPS IN JAVASCRIPT
 *
 * 1. for loop - runs a specified number of times
 * 2. while loop - runs as long as a condition is true
 * 3. do-while loop - runs at least once, then continues as long as a condition is true
 */

/**
 * 1. FOR LOOP
 *
 * Syntax:
 * for (initialization; condition; update) {
 *    // code to be executed
 * }
 *
 * - initialization: executed once before the loop starts
 * - condition: evaluated before each iteration; if false, the loop stops
 * - update: executed after each iteration
 */
console.log("\nFOR LOOP - Printing numbers 1 to 5:");
for (let j = 1; j <= 5; j++) {
  console.log(j);
}

/**
 * EXAMPLE: Printing only odd numbers from 1 to 20
 *
 * The modulo operator (%) returns the remainder of a division.
 * If a number % 2 equals 0, it's even. If it equals 1, it's odd.
 */
console.log("\nPrinting odd numbers from 1 to 20:");
for (let k = 1; k < 20; k += 1) {
  if (k % 2 !== 0) {
    console.log(k);
  }
}

/**
 * EXAMPLE: Multiplication table for 5
 */
console.log("\nMultiplication table for 5:");
for (let m = 1; m <= 10; m += 1) {
  console.log(`5 × ${m} = ${5 * m}`);
}

/**
 * 2. WHILE LOOP
 *
 * Syntax:
 * while (condition) {
 *    // code to be executed
 * }
 *
 * The loop continues as long as the condition is true.
 */
console.log("\nWHILE LOOP - Printing numbers 1 to 5:");
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

/**
 * 3. DO-WHILE LOOP
 *
 * Syntax:
 * do {
 *    // code to be executed
 * } while (condition);
 *
 * The code block is executed once before the condition is checked.
 * Then the loop continues as long as the condition is true.
 */
console.log("\nDO-WHILE LOOP - Printing numbers 1 to 5:");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

/**
 * PRACTICAL EXAMPLE: Checking if a number is even or odd
 */
console.log("\nChecking if numbers are even or odd:");
let numbers = [4, 7, 10, 15, 22];

for (let p = 0; p < numbers.length; p++) {
  let currentNum = numbers[p];

  if (currentNum % 2 === 0) {
    console.log(`${currentNum} is an even number`);
  } else {
    console.log(`${currentNum} is an odd number`);
  }
}

/**
 * PRACTICE EXERCISES:
 *
 * 1. Write a loop that prints the first 10 multiples of 3
 * 2. Write a loop that calculates the sum of numbers from 1 to 100
 * 3. Write a loop that finds all numbers divisible by both 3 and 5 between 1 and 50
 */
