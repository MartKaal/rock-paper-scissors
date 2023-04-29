let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

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
        playerScore++;
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        message = 'Paper beats Rock, you lose!';
        computerScore++;
    }
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        message = 'Draw! you both choose Rock!';
    }

    // Paper
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'Scissors beats paper, you lose!';
        computerScore++;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        message = 'Paper beats Rock, you win!';
        playerScore++;
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
        playerScore++;
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'Rock beats Scissors, you lose!';
        computerScore++;
    }

    updateScore(playerScore, computerScore);

    if (playerScore === 5) {
        message = 'You win!! gz!';
    } else if (computerScore === 5) {
        message = 'You lose... sadly :(';
    }

    return message;
}

function updateScore(playerScore, computerScore) {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

buttons.forEach((button) => {
    let choice = button.textContent;
    button.addEventListener('click', function (e) {
        result.textContent = playRound(choice, getComputerChoice());
    })
})