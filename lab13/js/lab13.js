/*
    lab.js - FizzBuzzBoom program.
    Author: Yihan Wang
    Date: 11/27/2023
*/

// In lab.js - top of the file
function fizzBuzzBoom() {
    let maxNum = parseInt(document.getElementById("maxNumber").value, 10);
    let fizzFactor = parseInt(document.getElementById("factorFizz").value, 10);
    let buzzFactor = parseInt(document.getElementById("factorBuzz").value, 10);
    let boomFactor = parseInt(document.getElementById("factorBoom").value, 10);

    console.log("fizzBuzzBoom function is called"); // Good for debugging

    let output = document.getElementById("output");
    output.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= maxNum; i++) {
        let result = '';
        let displayText = '';

        if (i % fizzFactor === 0) result += 'Fizz';
        if (i % buzzFactor === 0) result += 'Buzz';
        if (i % boomFactor === 0) result += 'Boom';

        displayText = result ? ${i} - ${result}! : ${i} - ; // Add exclamation mark if there's a result

        let textNode = document.createElement('div');
        if (result) {
            textNode.classList.add('special-output');
        }
        textNode.innerText = displayText;
        output.appendChild(textNode);
    }
}