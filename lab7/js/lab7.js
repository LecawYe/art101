/**
 * Author: Yihan Wang
 * Created: 11.03.2023
 *
 * (c) Copyright by Yihan Wang.
 **/

function sortUserName(userName) {
  // Remove spaces and convert to lowercase for case-insensitive sorting
  var userNameArray = userName.replace(/\s+/g, '').toLowerCase().split('');
  userNameArray.sort();
  return userNameArray.join('');
}

function sortUserName() {
 

  // Prompt the user for their name
  var userName = window.prompt("Please enter your name:");
  

  // Split the string into an array, sort it, and then join it back into a string
  var sortedName = userName.split('').sort().join('');

  // Return the sorted string
  return sortedName;
}

// Call the function and use document.writeln to output the sorted name
var userSortedName = sortUserName();
document.writeln("<div class='sorted-name'>Your sorted name is: " + userSortedName + "</div>");