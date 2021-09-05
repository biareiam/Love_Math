/* Code to be executed when the page has finished loading*/
/* Code to be executed when the user clicks a button */

// wait for the DOM to finish loading before running the game
// Get the button ellements and add event listeners to them


/* This code will only run once the DOM completely finished to load*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})



/**
 * The main game "loop", called when the script is first loaded
 * and afther the user's answer has been processed
 */
function runGame() {
    // Creates two random numbers between 1 and 25, it does not include 25. It is rounded (floor)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}


function chackAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}