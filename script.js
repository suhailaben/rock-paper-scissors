function computerPlay() {

    let rand = Math.floor(Math.random() * 30);

    let result = rand > 19 ?  'rock' : rand > 9 ?  'paper' :  'scissors';

    return result;

}

function singleRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return `You both selected ${playerSelection}. This was a tie.`
        } else if (playerSelection === 'paper') {
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You win!`
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
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You win!`
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
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You win!`
        } else if (playerSelection === 'paper') {
            return `You selected ${playerSelection} and the computer selected ${computerSelection}. You lose!`
        } else {
            return `You didn't make a valid move and therefore lose`
        }
    }

}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let step = 1;
let totalWins = 0;
let totalLosses = 0;
let totalTies = 0;

rock.addEventListener('click', () => {
    let result = singleRound('rock', computerPlay());
    const results = document.querySelector('#results');
    const resultsSingleRound = document.createElement('p');
    if (result.includes('win')) {
        totalWins++
    } else if (result.includes('lose')) {
        totalLosses++
    } else {
        totalTies++
    }
    if (step < 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        step++
    } else if (step === 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        const finalResults = document.createElement('p');
        finalResults.textContent = (totalWins > totalLosses) ? `You are the grand WINNER!` : (totalLosses > totalWins) ? `You are the grand LOSER!` : `You tied overall`;
        results.appendChild(finalResults);
        const finalScore = document.createElement('p');
        finalScore.textContent = `Wins: ${totalWins}; Losses: ${totalLosses}; Ties: ${totalTies}`
        results.appendChild(finalScore);
        step++
    } else return;
});

paper.addEventListener('click', () => {
    let result = singleRound('paper', computerPlay());
    const results = document.querySelector('#results');
    const resultsSingleRound = document.createElement('p');
    if (result.includes('win')) {
        totalWins++
    } else if (result.includes('lose')) {
        totalLosses++
    } else {
        totalTies++
    }
    if (step < 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        step++
    } else if (step === 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        const finalResults = document.createElement('p');
        finalResults.textContent = (totalWins > totalLosses) ? `You are the grand WINNER!` : (totalLosses > totalWins) ? `You are the grand LOSER!` : `You tied overall`;
        results.appendChild(finalResults);
        const finalScore = document.createElement('p');
        finalScore.textContent = `Wins: ${totalWins}; Losses: ${totalLosses}; Ties: ${totalTies}`
        results.appendChild(finalScore);
        step++
    } else return;
});

scissors.addEventListener('click', () => {
    let result = singleRound('scissors', computerPlay());
    const results = document.querySelector('#results');
    const resultsSingleRound = document.createElement('p');
    if (result.includes('win')) {
        totalWins++
    } else if (result.includes('lose')) {
        totalLosses++
    } else {
        totalTies++
    }
    if (step < 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        step++
    } else if (step === 5) {
        resultsSingleRound.textContent = `Round ${step}: ${result}`;
        results.appendChild(resultsSingleRound);
        const finalResults = document.createElement('p');
        finalResults.textContent = (totalWins > totalLosses) ? `You are the grand WINNER!` : (totalLosses > totalWins) ? `You are the grand LOSER!` : `You tied overall`;
        results.appendChild(finalResults);
        const finalScore = document.createElement('p');
        finalScore.textContent = `Wins: ${totalWins}; Losses: ${totalLosses}; Ties: ${totalTies}`
        results.appendChild(finalScore);
        step++
    } else return;
});

