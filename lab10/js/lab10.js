/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/16/2023
*/

function generateRandomText() {
    const phrases = ["Hello there!", "How are you?", "Nice to meet you!", "What's up?", "Have a great day!"];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

$(document).ready(function() {
    $("#generate-button").click(function() {
        const dialogue = generateRandomText();
        $("#output").text(dialogue);
    });
});
