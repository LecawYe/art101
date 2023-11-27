/*
    lab.js - FizzBuzzBoom program.
    Author: Yihan Wang
    Date: 11/27/2023
*/

function fizzBuzzBoom() {
    let maxNum = parseInt(document.getElementById("maxNumber").value, 10);
    let fizzFactor = 3; // Fixed factor for "Fizz"
    let buzzFactor = 5; // Fixed factor for "Buzz"
    let boomFactor = 7; // Fixed factor for "Boom"

    console.log("fizzBuzzBoom function is called"); // Good for debugging

    let output = document.getElementById("output");
    output.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= maxNum; i++) {
        let result = '';
        if (i % fizzFactor === 0) result += 'Fizz';
        if (i % buzzFactor === 0) result += 'Buzz';
        if (i % boomFactor === 0) result += 'Boom';

        // Create the text display for each line
        let displayText = result ? `${i} - ${result}!` : i.toString();

        // Create a div for each line and append to output
        let textNode = document.createElement('div');
        textNode.innerText = displayText;
        output.appendChild(textNode);
    }
}
