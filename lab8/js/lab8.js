/* * Author: Yihan Wang
 * Created: 11.06.2023
 * (c) Copyright by Yihan Wang. */ 


// A function to return the square root of a number
function squareRoot(x) {
  return Math.sqrt(x);
}

//testing
console.log('Square root of 4 is', squareRoot(4));
console.log('Square root of 16 is', squareRoot(16));


// Test the function with an array of numbers using map
const numbersArray = [1, 2, 3, 4, 5];
const sqrtResults = numbersArray.map(squareRoot);
console.log('Square roots:', sqrtResults);

// An example using an anonymous function with map to square each number
const squaredResults = numbersArray.map(function(x) {
  return x * x;
});
console.log('Squared:', squaredResults);

// Output results to the webpage
const outputEl = document.getElementById("output");
outputEl.innerHTML = "Square roots: " + sqrtResults.join(", ") + "<br>Squared: " + squaredResults.join(", ");

// Custom function that applies a callback to each element of an array
function customFunction(arr, callback) {
  return arr.map(callback);
}

// Example usage of customFunction
const customResults = customFunction(numbersArray, function(x) {
  return x + 10; // Example operation: add 10 to each number
});
console.log('Custom function results:', customResults);
