/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/16/2023
*/

function generateRandomText() {
    const text = ["Hello there!", "How are you?", "Nice to meet you!", "What's up?", "Have a great day!"];
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  $(document).ready(function() {
    $("#generate-button").click(function() {
        const dialogue = generateRandomText();
        $("#output").text(dialogue);
    });
});