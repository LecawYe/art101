document.addEventListener('DOMContentLoaded', () => {
  const startGame = (difficulty) => {
    localStorage.setItem('difficulty', difficulty);
    window.location.href = 'game.html';
  };

  document.getElementById('easy').addEventListener('click', () => startGame('easy'));
  document.getElementById('medium').addEventListener('click', () => startGame('medium'));
  document.getElementById('hard').addEventListener('click', () => startGame('hard'));
});
