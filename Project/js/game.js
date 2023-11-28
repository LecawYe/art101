document.addEventListener('DOMContentLoaded', () => {
  const randomColorBox = document.getElementById('randomColor');
  const checkButton = document.getElementById('check');
  const resetButton = document.getElementById('reset');
  const matchPercentageDisplay = document.getElementById('matchPercentage');
  
  function generateRandomColor() {
    const randomColor = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
    randomColorBox.style.backgroundColor = `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
    return randomColor;
  }
  
  function getUserColor() {
    return {
      red: document.getElementById('red').value,
      green: document.getElementById('green').value,
      blue: document.getElementById('blue').value
    };
  }
  
  function compareColors(randomColor, userColor) {
    return randomColor.red === userColor.red && randomColor.green === userColor.green && randomColor.blue === userColor.blue;
  }
  
  let randomColor = generateRandomColor();
  
  checkButton.addEventListener('click', () => {
    const userColor = getUserColor();
    if (compareColors(randomColor, userColor)) {
      matchPercentageDisplay.textContent = 'Correct! 🎉';
    } else {
      matchPercentageDisplay.textContent = 'Incorrect. Try again!';
    }
  });
  
  resetButton.addEventListener('click', () => {
    randomColor = generateRandomColor();
    matchPercentageDisplay.textContent = '';
  });
});
