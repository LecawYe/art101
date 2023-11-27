/*
    lab.js - FizzBuzzBoom program.
    Author: [Your Name]
    Date: [Date]
*/
// In lab.js - top of the file
const FACTORS = {
    3: "Fizz",
    5: "Buzz",
    7: "Boom",
    // Add new factors here
};

// Modify the fizzBuzzBoom function to use these factors

function fizzBuzzBoom() {
    let oneLongString = "";
    for (let num = 1; num <= 200; num++) {
        let output = num + " ";

        if (num % 3 === 0) output += "Fizz";
        if (num % 5 === 0) output += "Buzz";
        if (num % 7 === 0) output += "Boom";

        oneLongString += output + "<br>";
    }
    $("#output").html(oneLongString);
}

// Call the function
fizzBuzzBoom();
