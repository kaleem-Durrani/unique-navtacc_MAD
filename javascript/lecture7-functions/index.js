// a function that receives a dynamic caried amount of numbers.

// it should add and return its total

// function dynamicAddition(numberArray) {
//   let total;

//   for (let i = 0; i < numberArray.length; i++) {
//     total = total + numberArray[i];
//   }

//   return total;
// }

// let total = dynamicAddition([2, 43, 65, 5, 656, , 3453]);

let array = [1, 5, 23, 6, 4, 64];

let sum = 0;

for (let i = 0; i < array.length; i += 1) {
  sum = sum + array[i];
}

console.log(sum);
