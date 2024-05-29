const userText = document.getElementById("user-text");
const resetBtn = document.getElementById("reset-button");
const completeBtn = document.getElementById("complete-button");
const charCountDisplay = document.getElementById("character-count");
const wordCountDisplay = document.getElementById("word-count");
const lineCountDisplay = document.getElementById("line-count");
let charCounter = 0;

userText.addEventListener("input", alterCounter);
resetBtn.addEventListener("click", resetText);
completeBtn.addEventListener("click", disableInput);

function alterCounter() {
    charCountDisplay.textContent = userText.value.length;
    wordCountDisplay.textContent = userText.value.trim() ? countWords() : 0;
    lineCountDisplay.textContent = userText.value.trim() ? countLines() : 0;
}

function countWords () {
    const words = userText.value.trim().split(/\s+/)
    return words.length
}

function countLines() {
    const lines = userText.value.trim().split(".")
    return lines.length
}

function resetText() {
    userText.value = "";
    alterCounter();
    userText.disabled = false;
}

function disableInput () {
    userText.disabled = true; 
}