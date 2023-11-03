/**
 * Author: Yihan Wang
 * Created: 11.03.2023
 *
 * (c) Copyright by Yihan Wang.
 **/

// Create the main title
var title = document.createElement('h1');
title.textContent = 'Enter Your Name';
document.body.appendChild(title);

// Create the submit button
var submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
document.body.appendChild(submitButton);

// Function to shuffle the characters in a string
function shuffle(string) {
    var array = string.split('');
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join('');
}


// Function to sort the letters of the user's name
function sortUserName() {
  // Prompt user for their name
  var userName = window.prompt("Hi! Waht's your name? Please enter your name.");
  if (person !=null) {
    var sortedName = userName.split('').sort().join('');
    console.log("Here's your sorted name: " + sortedName);

    var anagram = shuffle(userName);
    console.log("And oh hey, I fixed your name. Your new one is: " + anagram);
}
};
