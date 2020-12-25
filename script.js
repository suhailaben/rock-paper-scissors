function computerPlay() {

    let rand = Math.floor(Math.random() * 30);

    let result = rand > 18 ?  'rock' : rand > 8 ?  'paper' :  'scissors';

    return result;

}

// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function singleRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return `You both selected ${playerSelection}. This was a tie.`
        } else if (playerSelection === 'paper') {
            return `You selected ${playerSelection} and computer selected ${computerSelection}. You win!`
        } else if (playerSelection === 'scissors') {
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You lose!`
        } else {
            return `You didn't make a valid move and therefore lose`
        }
    }

    if (computerSelection === 'paper') {
        if (playerSelection === 'paper') {
            return `You both selected ${playerSelection}. This was a tie.`
        } else if (playerSelection === 'scissors') {
            return `You selected ${playerSelection} and computer selected ${computerSelection}. You win!`
        } else if (playerSelection === 'rock') {
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You lose!`
        } else {
            return `You didn't make a valid move and therefore lose`
        }
    }
    
    if (computerSelection === 'scissors') {
        if (playerSelection === 'scissors') {
            return `You both selected ${playerSelection}. This was a tie.`
        } else if (playerSelection === 'rock') {
            return `You selected ${playerSelection} and computer selected ${computerSelection}. You win!`
        } else if (playerSelection === 'paper') {
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You lose!`
        } else {
            return `You didn't make a valid move and therefore lose`
        }
    }

}



// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function game(rounds) {

    let totalWins = 0;
    let totalLosses = 0;
    let totalTies = 0;

    for (i = 0; i < rounds ; i++) {
        let playerChoice = prompt('Rock, paper, or scissors?')
        let fate = singleRound(playerChoice, computerPlay())
        reaction = alert(fate);
        totalLosses = totalLosses++
        if (fate.includes('win')) {
            totalWins++
        } else if (fate.includes('lose')) {
            totalLosses++
        } else {
            totalTies++
        }
    }

    if (totalWins > totalLosses) {
        alert(`You are the grand WINNER! Wins: ${totalWins}; Losses: ${totalLosses} Ties: ${totalTies}`)
    } else if (totalLosses > totalWins) {
        alert(`You are the grand LOSER! Wins: ${totalWins}; Losses: ${totalLosses} Ties: ${totalTies}`)
    } else {
        alert(`You tied. Wins: ${totalWins}; Losses: ${totalLosses}; Ties: ${totalTies}`)
    }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

game(prompt('How many rounds?'))