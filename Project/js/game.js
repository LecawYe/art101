// sardar
// megan
//dinal
// yihan
// November 2023




// 1. Create a function that takes in a number and returns the number times two. Then run the function and print the result.
  // Define all your game logic here
  // The current code seems to be a mix of placeholders and initial setup
  // Define functions to generate random colors, set color sliders, etc.

document.addEventListener('DOMContentLoaded', () => {
  const easyButton = document.getElementById('easy');
  const mediumButton = document.getElementById('medium');
  const hardButton = document.getElementById('hard');
  const checkButton = document.getElementById('check');
  const resetButton = document.getElementById('reset');
  const randomColorBox = document.getElementById('randomColor');
  const matchPercentageDisplay = document.getElementById('matchPercentage');

  let randomColor = {};
  let userColor = { red: 0, green: 0, blue: 0 };
  let timeLimit;

  function generateRandomColor() {
    randomColor.red = Math.floor(Math.random() * 256);
    randomColor.green = Math.floor(Math.random() * 256);
    randomColor.blue = Math.floor(Math.random() * 256);
    randomColorBox.style.backgroundColor = `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
  }

  function setColorSliders() {
    document.getElementById('red').value = userColor.red;
    document.getElementById('green').value = userColor.green;
    document.getElementById('blue').value = userColor.blue;
    updateUserColorDisplay();
  }

  function updateUserColorDisplay() {
    userColor.red = document.getElementById('red').value;
    userColor.green = document.getElementById('green').value;
    userColor.blue = document.getElementById('blue').value;
    let userColorBox = document.getElementById('userColor');
    if (!userColorBox) {
      userColorBox = document.createElement('div');
      userColorBox.id = 'userColor';
      userColorBox.style.width = '100px';
      userColorBox.style.height = '100px';
      randomColorBox.insertAdjacentElement('afterend', userColorBox);
    }
    userColorBox.style.backgroundColor = `rgb(${userColor.red}, ${userColor.green}, ${userColor.blue})`;
  }

  function calculateMatchPercentage() {
    const redDiff = Math.abs(randomColor.red - userColor.red);
    const greenDiff = Math.abs(randomColor.green - userColor.green);
    const blueDiff = Math.abs(randomColor.blue - userColor.blue);
    const difference = redDiff + greenDiff + blueDiff;
    const maxDifference = 255 * 3;
    return 100 - Math.floor((difference / maxDifference) * 100);
  }

  easyButton.addEventListener('click', () => {
    timeLimit = Infinity; // No time limit for easy
    generateRandomColor();
  });

  mediumButton.addEventListener('click', () => {
    timeLimit = 300000; // 5 minutes for medium
    generateRandomColor();
  });

  hardButton.addEventListener('click', () => {
    timeLimit = 60000; // 1 minute for hard
    generateRandomColor();
  });

  checkButton.addEventListener('click', () => {
    const matchPercentage = calculateMatchPercentage();
    matchPercentageDisplay.textContent = `Match: ${matchPercentage}%`;
  });

  resetButton.addEventListener('click', () => {
    userColor = { red: 0, green: 0, blue: 0 };
    setColorSliders();
    matchPercentageDisplay.textContent = '';
  });

  // Set up the initial state
  generateRandomColor();
  setColorSliders();
  ['red', 'green', 'blue'].forEach(color => {
    document.getElementById(color).addEventListener('input', updateUserColorDisplay);
  });
});
