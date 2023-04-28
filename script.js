function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
}

function playRound(playerSelection, computerSelection) {
    let message;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        message = 'Rock beats Scissors, you win!';
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        message = 'Paper beats Rock, you lose!';
    }
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        message = 'Draw! you both choose Rock!';
    }

    // Paper
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'Scissors beats paper, you lose!';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        message = 'Paper beats Rock, you win!';
    }
    if (playerSelection == 'paper' && computerSelection == 'paper') {
        message = 'Draw! you both choose Paper!';
    }

    // Scissors
    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        message = 'Draw! you both choose Scissors!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        message = 'Scissors beats Paper, you win!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'Rock beats Scissors, you lose!';
    }

    return message;
}

function game() {
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Make your choice!");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();