const container = document.querySelector('.container');
const playAgainButton = document.querySelector('.playAgain');

playAgainButton.addEventListener('click',()=>{
    window.location.href = '../mainGame.html';
});

const trackedTime = localStorage.getItem('trackedTime');
const message = document.querySelector('.info');
message.textContent = `Your score: ${trackedTime || 0} seconds`;
message.style.display = 'block';

