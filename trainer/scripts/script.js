let currentTask = 1;

function startTaskFromlobby(number) {
    document.getElementById("lobby").classList.add("hidden");
    document.getElementById("task-screen").classList.remove("hidden");
    
    let word = words[Math.floor(Math.random() * words.length)];
    let isMorse = Math.random() > 0.5;
    
    if (isMorse) {
        document.getElementById("question").innerText = textToMorse(word);
        document.getElementById("question").dataset.answer = word.toUpperCase();
    } else {
        document.getElementById("question").innerText = word;
        document.getElementById("question").dataset.answer = textToMorse(word);
    }

    document.getElementById("reset").classList.add("hidden")
    document.getElementById("praise").innerText = ""
    document.getElementById("answer").value = "";
    if (number === 1) {
        currentTask++;
    }
}

function checkAnswer() {
    let answer = document.getElementById("answer").value.trim();
    let correctAnswer = document.getElementById("question").dataset.answer;

    if (answer.toUpperCase() === correctAnswer) {
        document.getElementById("praise").innerText = "Правильно!"
        document.getElementById("reset").classList.remove("hidden")
    } else {
        document.getElementById("praise").innerText = "Неправильно, спробуй ще раз."
    }
}

function leaveTolobby(number) {
    currentTask++;
    document.getElementById("reset").classList.add("hidden")
    document.getElementById("praise").innerText = ""
    document.getElementById("task-title").innerText = `Завдання ${currentTask}`;
    document.getElementById("answer").value = "";
    document.getElementById("task-screen").classList.add("hidden");
    document.getElementById("lobby").classList.remove("hidden");

    if (number === -1) {
        currentTask--;
    }
}

function textToMorse(text) {
    return text.toUpperCase().split("").map(char => morseCode[char] || char).join(" ");
}