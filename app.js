function ROCK() {
    playGame(1);
}

function PAPER() {
    playGame(2);
}

function SCISSOR() {
    playGame(3);
}


function playGame(playerChoice) {
    let r = Math.floor(Math.random() * 3) + 1;
    let resultElement = document.getElementById("result");
    let resultText;
    let opponentChoice;

    if (r === 1) {
        opponentChoice = "ROCK";
    } else if (r === 2) {
        opponentChoice = "PAPER";
    } else {
        opponentChoice = "SCISSOR";
    }

    if (playerChoice === r) {
        resultText = `It's a tie! Opponent picked ${opponentChoice}`;
        lose();
    } else if (
        (playerChoice === 1 && r === 3) ||
        (playerChoice === 2 && r === 1) ||
        (playerChoice === 3 && r === 2)
    ) {
        resultText = `You win! Opponent picked ${opponentChoice}`;
        celebrate();
    } else {
        resultText = `You lose! Opponent picked ${opponentChoice}`;
        lose();
    }

    resultElement.innerHTML = resultText;
}

function celebrate() {
    let celebrateElement = document.getElementById("celebrate");
    celebrateElement.style.display = "block";
    celebrateElement.innerHTML = "Congratulations! You Win!";
}

function lose(){
    let celebrateElement = document.getElementById("celebrate");
    celebrateElement.style.display = "none";
    celebrateElement.innerHTML = "Congratulations! You Win!";
}

