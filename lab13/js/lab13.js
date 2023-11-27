/*
    lab13.js - FizzBuzzBoom program.
    Author: Yihan Wang
    Date: 11/27/2023
*/

function fizzBuzzBoom() {
    let maxNum = parseInt(document.getElementById("maxNumber").value, 10);
    let fizzFactor = parseInt(document.getElementById("factorFizz").value, 10);
    let buzzFactor = parseInt(document.getElementById("factorBuzz").value, 10);
    let boomFactor = parseInt(document.getElementById("factorBoom").value, 10);

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
