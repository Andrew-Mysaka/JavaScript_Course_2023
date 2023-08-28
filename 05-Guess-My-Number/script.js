'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "🚫 No Number!";
        displayMessage("🚫 No Number!");

        // When players win
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "🎯 Correct Number!";
        displayMessage("🎯 Correct Number!");
        document.querySelector(".number").textContent = secretNumber.toString();
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        //When guess is wrong
    }
    else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!": "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score.toString();
        } else {
            score = 0;
            document.querySelector(".score").textContent = score.toString();
            displayMessage("💥 You lost the game!");
        }
    }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score.toString();
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

