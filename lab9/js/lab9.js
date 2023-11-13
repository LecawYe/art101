/*
   lab9.js - This JavaScript file, utilizing jQuery, demonstrates basic DOM manipulation. It includes a simple event handling example where clicking a specific element changes its text.

   Requirements: This script requires jQuery to be loaded in order to function properly.

   Author: Yihan Wang
   Date: 11/12/2023
*/

// Add a button to each special-section
$(".special-section").append("<button class='special-button'>Make Special</button>");

// Add a click event handler to each special-button
$(".special-section .special-button").click(function() {
  // Toggle the special class on the parent section
  $(this).parent().toggleClass("special");
});
