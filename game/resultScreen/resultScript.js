const container = document.querySelector('.container');
const playAgainButton = document.querySelector('.playAgain');

playAgainButton.addEventListener('click',()=>{
    window.location.href = '../mainGame.html';
});

const trackedTime = localStorage.getItem('trackedTime')/60; //convert in seconds
const wordCount = localStorage.getItem('wordCount');
const message = document.querySelector('.info');
message.textContent = `Your score: ${(wordCount/trackedTime).toFixed(3) || 0} WPM`;
message.style.display = 'block';