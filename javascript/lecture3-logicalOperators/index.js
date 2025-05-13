// // console.log(5 > 4);

// let bobsAge = 15;

// let janesAge = 20;

// // let isAdult = age > 18;

// console.log(bobsAge < janesAge);

// console.log(janesAge > bobsAge);

// console.log(5 + 3 == 8);

// let num = 15;

// console.log(num % 2 == 1);

// if (num % 2 == 1) {
//   console.log("Odd");
// } else {
//   console.log("Even");
// }

// let num = 1;

// if (num > 20) {
//   console.log("this number is greater than 20");
// } else {
//   console.log("this number is less than 20");
// }

// if (condition) {

// }

// if (condition) {

// }else{

// }

// if (condition) {

// } else if (condition) {

// }

// if (condition) {

// }else if (condition) {

// }else if (condition) {

// } else {

// }

// let carTint = "transparent";
// let speed = "60";

// let fine = 0;

// if (carTint === "black") {
//   fine = fine + 100;
// }

// if (speed > 45) {
//   fine = fine + 100;
// }

// console.log(fine);

// if (myName === "ali" || myName === "ahmad") {
//   console.log("hello");
// }

// let height = 120;

// let age = 18;

// if (height > 120 ) {

//   if (age > 18) {

//     console.log("you can take this ride");
//   }

// } else {
//   console.log("you cant take this ride");
// }

// if (height >= 120 && age >= 18) {
//   console.log("you can take this ride");
// } else {
//   console.log("you cant take this ride");
// }

// nested conditionals

let marks = 123;
let grade;

if (marks <= 100 && marks >= 85) {
  grade = "A";
} else if (marks < 85 && marks >= 75) {
  grade = "B";
} else if (marks <= 74 && marks >= 65) {
  grade = "C";
} else if (marks <= 64 && marks >= 50) {
  grade = "D";
} else if (marks >= 0 && marks < 50) {
  grade = "F";
} else {
  grade = "error";
}

console.log(grade);
