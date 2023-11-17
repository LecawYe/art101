/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/16/2023
*/

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
// click listener for button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    

    $("#submit-button").click(function() {
        const userInput = $("#user-input").val();
        if (userInput) {
            $("#output").append('<div class="text user-text"><p>' + userInput + '</p></div>');
            $("#user-input").val(''); // Clear the input field after sending
        }
    });
});
// "For the bonus task in our JavaScript web lab, we've implemented a novel feature that allows users to actively participate in the dialogue. This enhancement involves an input 
//field and a send button, enabling users to contribute their own text to the conversation. Unlike the main task, where the dialogue was generated randomly, this feature empowers 
//users to input custom text, adding a unique and personal dimension to the interaction. The user's input is then displayed alongside the computer-generated text, creating a more dynamic and 
//engaging conversation. This input field introduces a real-time, interactive component to the web page, showcasing how JavaScript can be used to create a more immersive and user-driven experience. 
//It exemplifies the potential of web programming in enhancing user engagement and interactivity, transforming a static page into a platform for lively and personalized communication."

