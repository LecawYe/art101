/*
    lab.js - FizzBuzzBoom program.
    Author: [Your Name]
    Date: [Date]
*/
// In lab.js - top of the file
function fizzBuzzBoom() {
    let maxNum = parseInt(document.getElementById("maxNumber").value, 10);
    let fizzFactor = parseInt(document.getElementById("factorFizz").value, 10);
    let buzzFactor = parseInt(document.getElementById("factorBuzz").value, 10);
    let boomFactor = parseInt(document.getElementById("factorBoom").value, 10);

    let output = document.getElementById("output");
    output.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= maxNum; i++) {
        let result = '';

        if (i % fizzFactor === 0) result += 'Fizz';
        if (i % buzzFactor === 0) result += 'Buzz';
        if (i % boomFactor === 0) result += 'Boom';

        let textNode = document.createElement('div');
        textNode.innerHTML = result || i;
        output.appendChild(textNode);
    }
}
