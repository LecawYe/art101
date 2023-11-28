// sardar
// megan
//dinal
// yihan
// November 2023




// 1. Create a function that takes in a number and returns the number times two. Then run the function and print the result.

document.addEventListener('DOMContentLoaded', () => {
  const randomColorBox = document.getElementById('randomColor');
  const matchPercentageDisplay = document.getElementById('matchPercentage');
  const difficulty = localStorage.getItem('difficulty') || 'easy';
  let randomColor = {};

  function generateRandomColor() {
    randomColor.red = Math.floor(Math.random() * 256);
    randomColor.green = Math.floor(Math.random() * 256);
    randomColor.blue = Math.floor(Math.random() * 256);
    randomColorBox.style.backgroundColor = `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
  }

  function calculateMatchPercentage(userColor) {
    const redDiff = Math.abs(randomColor.red - userColor.red);
    const greenDiff = Math.abs(randomColor.green - userColor.green);
    const blueDiff = Math.abs(randomColor.blue - userColor.blue);
    const difference = redDiff + greenDiff + blueDiff;
    const maxDifference = 255 * 3;
    return 100 - Math.floor((difference / maxDifference) * 100);
  }

  function setupGame() {
    generateRandomColor();
    // Add any additional setup based on difficulty if needed
    // For example, set a timer for Medium and Hard modes
  }

  document.getElementById('check').addEventListener('click', () => {
    const userColor = {
      red: parseInt(document.getElementById('red').value, 10),
      green: parseInt(document.getElementById('green').value, 10),
      blue: parseInt(document.getElementById('blue').value, 10)
    };
    const matchPercentage = calculateMatchPercentage(userColor);
    matchPercentageDisplay.textContent = `Match: ${matchPercentage}%`;
  });

  document.getElementById('reset').addEventListener('click', setupGame);

  setupGame(); // Initialize the game
});
