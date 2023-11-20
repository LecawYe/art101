/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/20/2023
*/

// Function to sort the characters of a string in alphabetical order
function sortString(inputString) {
    // Convert the string to an array, sort it, and then join back into a string
    return inputString.split('').sort().join('');
  }
  
  // jQuery to handle the click event on the button with id 'submit'
  $("#submit").click(function() {
    // Get the value of the input field with id 'user-name'
    const userName = $("#user-name").val();
  
    // Sort the userName using the sortString function
    const userNameSorted = sortString(userName);
  
    // Select the output div with id 'output' and set its HTML content
    // This appends a new div with the sorted user name inside a paragraph
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  