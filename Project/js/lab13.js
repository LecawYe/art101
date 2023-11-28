/*
    lab13.js - FizzBuzzBoom program.
    Author: Yihan Wang
    Date: 11/27/2023
*/

function fizzBuzzBoom() {
    console.log("FizzBuzzBoom function called"); // Debugging line

    let maxNum = parseInt(document.getElementById("maxNumber").value, 10);
    let fizzFactor = parseInt(document.getElementById("factorFizz").value, 10);
    let buzzFactor = parseInt(document.getElementById("factorBuzz").value, 10);
    let boomFactor = parseInt(document.getElementById("factorBoom").value, 10);

    console.log("Max Num:", maxNum, "Fizz Factor:", fizzFactor, "Buzz Factor:", buzzFactor, "Boom Factor:", boomFactor); // Debugging line

    if (isNaN(maxNum) || isNaN(fizzFactor) || isNaN(buzzFactor) || isNaN(boomFactor)) {
        console.error("One of the input values is not a number.");
        return;
    }

    $("#output").empty(); // Clear previous results

    for (let i = 1; i <= maxNum; i++) {
        let result = '';
        if (i % fizzFactor === 0) result += 'Fizz';
        if (i % buzzFactor === 0) result += 'Buzz';
        if (i % boomFactor === 0) result += 'Boom';

        let displayText = result ? `${i} - ${result}!` : `${i} - `;
        $("#output").append(`<div>${displayText}</div>`);
    }
}
