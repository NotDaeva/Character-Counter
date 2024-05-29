const userText = document.getElementById("user-text");
const resetBtn = document.getElementById("reset-button");
const completeBtn = document.getElementById("complete-button");
const charCountDisplay = document.getElementById("character-count");
let charCounter = 0;

userText.addEventListener("input", alterCounter);
resetBtn.addEventListener("click", resetText);
completeBtn.addEventListener("click", disableInput);

function alterCounter() {
    charCountDisplay.textContent = userText.value.length;
}

function resetText() {
    userText.value = "";
    alterCounter();
    userText.disabled = false;
}

function disableInput () {
    userText.disabled = true; 
}