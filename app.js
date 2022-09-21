// Elements:

const setMostPoint = document.querySelector("#playto");
const player1Button = document.querySelector("#p1Button");
const player2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const player1Display = document.querySelector("#p1Display");
const player2Display = document.querySelector("#p2Display");

// Event Listeners: 

player1Button.addEventListener("click", player1Up);
player2Button.addEventListener("click", player2Up);
resetButton.addEventListener("click", resetScores);
setMostPoint.addEventListener("input", changeSettedPoint);

// Score Situations

let player1CurrentScore = parseInt(player1Display.innerText);
let player2CurrentScore = parseInt(player2Display.innerText);
settedPoint = setMostPoint.value;

// Functions:

function player1Up() {
    if (player1CurrentScore < settedPoint && player2CurrentScore < settedPoint) {
        player1CurrentScore++;
        player1Display.innerText = player1CurrentScore;
        // console.log(player1CurrentScore);
        if (player1CurrentScore == settedPoint) {
            player1Display.style.color = "green";
            player2Display.style.color = "red";
        }
    }
}
function player2Up() {
    if (player1CurrentScore < settedPoint && player2CurrentScore < settedPoint) {
        player2CurrentScore++;
        player2Display.innerText = player2CurrentScore;
        // console.log(player2CurrentScore);
        if (player2CurrentScore == settedPoint) {
            player2Display.style.color = "green";
            player1Display.style.color = "red";
        }
    }
}
function resetScores() {
    player1Display.innerText = "0";
    player2Display.innerText = "0";
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    player1Display.style.color = "";
    player2Display.style.color = "";
}
function changeSettedPoint() {
    let newSettedPoint = setMostPoint.value;
    settedPoint = newSettedPoint;
    // console.log(settedPoint);
}


