/*
    lab.js - FizzBuzzBoom program.
    Author: [Your Name]
    Date: [Date]
*/
// In lab.js - top of the file
function fizzBuzzBoom() {
    let maxNum = parseInt(document.getElementById("maxNumber").value);
    let fizzFactor = parseInt(document.getElementById("factorFizz").value);
    let buzzFactor = parseInt(document.getElementById("factorBuzz").value);
    let boomFactor = parseInt(document.getElementById("factorBoom").value);

    let output = "";
    for (let i = 1; i <= maxNum; i++) {
        let result = "";

        if (i % fizzFactor === 0) result += "Fizz!";
        if (i % buzzFactor === 0) result += "Buzz!";
        if (i % boomFactor === 0) result += "Boom!";

        output += (result || i) + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}
