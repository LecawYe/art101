/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/20/2023
*/

// Function to sort the characters of a string in alphabetical order
// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

// An anagram function (a simple version for demonstration)
function anagram(inputString) {
    if (inputString.length <= 2) {
        return inputString.length === 2 ? [inputString, inputString[1] + inputString[0]] : [inputString];
    }

    return inputString.split('').reduce((acc, letter, i) =>
        acc.concat(anagram(inputString.slice(0, i) + inputString.slice(i + 1)).map(val => letter + val)), []);
}

// jQuery to handle the click event on the button with id 'submit'
$("#submit").click(function() {
    const inputSelectors = ["#user-name", "#additional-input1", "#additional-input2"]; // Add more selectors as needed
    $("#output").empty(); // Clearing the output before appending new content
    inputSelectors.forEach(selector => {
        const value = $(selector).val();
        const sortedValue = sortString(value);
        const anagrams = anagram(value).join(", ");
        $("#output").append('<div class="text"><p>Sorted: ' + sortedValue + '</p><p>Anagrams: ' + anagrams + '</p></div>');
    });
});

// Additional buttons for different actions
$("#action1").click(function() {
    // Code for the first action (e.g., change background color)
    $("body").css("background-color", "lightblue");
});

$("#action2").click(function() {
    // Code for the second action (e.g., change text color)
    $("body").css("color", "green");
});

// Implementing a "glitch" effect
// Existing code...

// Function to create a more noticeable glitch effect
function enhancedGlitchEffect() {
    // Example: Toggle a class that changes styles drastically
    $('body').toggleClass('glitch-style');
}

// Apply a set of styles when the glitch effect is active
$('<style>')
    .prop('type', 'text/css')
    .html(`
        .glitch-style {
            /* Example styles for glitch effect */
            filter: invert(100%);
            transform: rotate(1deg);
        }
    `)
    .appendTo('head');

// Trigger the enhanced glitch effect every 3 seconds
setInterval(enhancedGlitchEffect, 3000);

