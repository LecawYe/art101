/**
 * Author: Yihan Wang
 * Created: 11.03.2023
 *
 * (c) Copyright by Yihan Wang.
 **/

// Create an array of numbers
var numbersArray = [10, 20, 30, 40, 50];

// Define a named function to calculate the square of a number
function calculateSquare(x) {
    return x * x;
}

// Use map with the named function as a callback to get an array of squares
var squares = numbersArray.map(calculateSquare);
console.log('Squares:', squares);

// Use map with an anonymous function as a callback to get an array of half values
var halfValues = numbersArray.map(function(x) {
    return x / 2;
});
console.log('Half Values:', halfValues);
