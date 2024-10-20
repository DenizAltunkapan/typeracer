const text = document.querySelector('.text');
const input = document.querySelector('textarea');
const countdown = document.querySelector('.countdown');
const message = document.querySelector('.message');

let countdownSeconds = 5;
let roundBreak = 10000;
let countdownInterval;
let startTime;

//functions that will be called when the window is loaded
window.onload = ()=>{
    loadText();
    startCountdown();
}

function loadText() {
    generateText().then(generatedText => {
        if (generatedText) {
            text.textContent = generatedText;
        }
    });
}

// fetch random text from an API
function generateText() {
    return fetch('https://baconipsum.com/api/?type=all-meat&paras=1&sentences=1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const generatedText = data[0];
            return generatedText;
        })
        .catch(error => {
            console.error('Error:', error);
            return null;
        });
}

//check if user input matches
function checkText(){
    const inputText = input.value.trim();
    const displayedText = text.textContent;
    if(inputText.replace(/\n/g, ' ') == displayedText){
        const endTime = Date.now();
        const trackedTime= (endTime-startTime)/1000;
        const wordCount = displayedText.split(' ').length;
        localStorage.setItem('wordCount', wordCount);
        localStorage.setItem('trackedTime', trackedTime);
        window.location.href = 'resultScreen/resultScreen.html';
    }
}

/* function to start the countdown starting from countdownSeconds,
*  if 0 is reached, the time is tracked to calculate the WPM
*/
function startCountdown(){
    countdownSeconds = 5;
    countdown.textContent= countdownSeconds;
    input.disabled = true;
    startTime = Date.now();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    countdownSeconds--;
    countdown.textContent= countdownSeconds;
    if (countdownSeconds <= 0) {
        clearInterval(countdownInterval);
        countdown.textContent = "time is being measured...";
        input.disabled = false;
        startTime = Date.now();
    }
}
