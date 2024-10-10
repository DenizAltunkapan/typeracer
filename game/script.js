const text = document.querySelector('.text');
const input = document.querySelector('input');

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

function loadText() {
    generateText().then(generatedText => {
        if (generatedText) {
            text.textContent = generatedText;
        }
    });
}

window.onload = loadText;

function checkText(){
    const inputText = input.value;
    const displayedText = text.textContent;
    if(inputText== displayedText){
        generateText().then(text => {
            loadText();
        });
        input.value='';
    }
}
