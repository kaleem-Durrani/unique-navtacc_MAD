// let age = 24;

// let a = 5;
// let b = 8;

// console.log(a + b);

// a = "john";

// console.log(b + a);

// let width = 5;
// let height = 7;

// console.log(width * height);

// let num1 = 4;

// let num2 = 8;

// if (num1 > num2) {
//   console.log("first number is greater");
// } else if (num1 < num2) {
//   console.log("first number is smaller");
// } else {
//   console.log("both are equal");
// }

// console.log(15 % 4);

// let isMember = false;

// let hasPaid = true;

// if (isMember && hasPaid) {
//   console.log("access granted");
// } else if (isMember && !hasPaid) {
//   console.log("you are a member but you have to pay first");
// } else if (!isMember && hasPaid) {
//   console.log("you have paid but you are not a member yet");
// } else if (!isMember && !hasPaid) {
//   console.log("you are neither a member nor have you paid");
// }

// console.log(!(3 < 5));

// if (3 < 5) {
//   console.log("first number is greater");
// }

// let isWeekend = false;

// let isHoliday = false;

// if (!isWeekend && !isHoliday) {
//   console.log("workday");
// } else {
//   console.log("holiday");
// }

// let number = 6;

// if (number % 2 === 0 && number % 3 === 0) {
//   console.log("number is dividible by both 2 and 3");
// } else {
//   console.log("number is not divisible by both 2 and 3");
// }

// let number = 6;

// if (number < 10 || number > 100) {
//   console.log("this numnber is either less than 10 or greater than 100");
// } else {
//   console.log("the number is in between 10 and 100");
// }

// let day = 4;
// let hour = 14;

// if (day >= 1 && day <= 5) {
//   if (hour >= 9 && hour <= 12) {
//     console.log("it is a weekday morning");
//   } else {
//     console.log("it is not a week day morning");
//   }
// } else {
//   console.log("it is not a week day morning");
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let number = 6;

// let factorial = 1;

// for (let i = 1; i <= number; i += 1) {
//   factorial = factorial * i;
// }

// console.log(factorial);

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// let movies = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < movies.length; i += 1) {
//   console.log(movies[i]);
// }

// let numbers = [5, 3, 6, 7, 3, 9, 12, 43, -9, 220];

// largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }

//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// console.log(smallest, largest);

// remove the last item of array and add a new one to the begining

let array = [1, 2, 3, 4, 5, 6];

// console.log(array.reverse());

// array = array.reverse();

// console.log(array);

// array.pop();

// console.log(array);

// console.log(array);

// let lastItem = array.pop();

// console.log(array);
// console.log(lastItem);

// array.push(10);

// console.log(array);

// // array.unshift(88);

// console.log(array);

// array = [88, ...array];

// console.log(array);

// let number = prompt("enter a number");

// console.log(number);

// let number2 = prompt("enter a second number");

// console.log(number2);

// let numberArray = [];
// for (let i = 0; i < 5; i += 1) {
//   let input = prompt("enter a number");
//   numberArray.push(input);
// }

// console.log(numberArray);

// let originalArray = [5, 28, 34, 7, 9, 134];

// let filteredArray = [];

// for (let i = 0; i < originalArray.length; i += 1) {
//   if (originalArray[i] >= 10) {
//     filteredArray.push(originalArray[i]);
//   }
// }

// console.log(filteredArray);

// let sum = 0;

// for (let i = 0; i < filteredArray.length; i += 1) {
//   sum = sum + filteredArray[i];
// }

// let average = sum / filteredArray.length;

// console.log(average);

// if (average % 2 === 0) {
//   console.log("average is even");
// } else {
//   console.log("average is odd");
// }

let originalArray = [12, 5, 32, 12, 10, 9, 3, 36, 60, 7, 12];

let filteredArray = [];

for (let i = 0; i < originalArray.length; i += 1) {
  if (originalArray[i] >= 10) {
    filteredArray.push(originalArray[i]);
  } 
}

console.log(filteredArray);

let sum = 0;

for (let i = 0; i < filteredArray.length; i += 1) {
  sum = sum + filteredArray[i];
}

console.log(sum);

let average = sum / filteredArray.length;

console.log(average);

if (average % 2 === 0) {
  console.log("average is even");
} else {
  console.log("average is odd");
}
