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
  let gameTimer;

  function generateRandomColor() {
    // ... existing code to generate a random color
  }

  function calculateMatchPercentage(userColor) {
    // ... existing code to calculate the match percentage
  }

  function endGame() {
    // Disable sliders and show the final match percentage
    document.getElementById('red').disabled = true;
    document.getElementById('green').disabled = true;
    document.getElementById('blue').disabled = true;
    const userColor = getUserColor();
    const matchPercentage = calculateMatchPercentage(userColor);
    matchPercentageDisplay.textContent = `Time's up! Match: ${matchPercentage}%`;
  }

  function getUserColor() {
    return {
      red: parseInt(document.getElementById('red').value, 10),
      green: parseInt(document.getElementById('green').value, 10),
      blue: parseInt(document.getElementById('blue').value, 10)
    };
  }

  function startTimer(duration) {
    gameTimer = setTimeout(endGame, duration);
  }

  function setupGame() {
    generateRandomColor();
    switch(difficulty) {
      case 'medium':
        startTimer(300000); // 5 minutes
        break;
      case 'hard':
        startTimer(60000); // 1 minute
        break;
      // No timer for 'easy' difficulty
    }
  }

  document.getElementById('check').addEventListener('click', () => {
    clearTimeout(gameTimer); // Stop the timer when the user checks the color
    const userColor = getUserColor();
    const matchPercentage = calculateMatchPercentage(userColor);
    matchPercentageDisplay.textContent = `Match: ${matchPercentage}%`;
  });

  document.getElementById('reset').addEventListener('click', () => {
    clearTimeout(gameTimer);
    setupGame(); // Reset the game
  });

  setupGame(); // Initialize the game
});
