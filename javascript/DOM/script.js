// // Program to find the minimum (or maximum) element of an array

// //

// arr = [89, 33, 888, 54, 2, 100]





// // create a variable for the sum and initialize it
// let sum = 0;

// // iterate over each item in the array
// for (let i = 0; i < arr.length; i++ ) {
//   sum += arr[i];
// }

// console.log(sum) 


const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Find the minimum element
const minElement = Math.min(...numbers);

// Find the maximum element
const maxElement = Math.max(...numbers);

console.log("Minimum Element:", minElement);
console.log("Maximum Element:", maxElement);