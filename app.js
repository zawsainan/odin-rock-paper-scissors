
const lookUp = {
    rock:"scissors",
    scissors:"paper",
    paper:"rock"
};
let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock or Paper or Scissors","Rock").toLowerCase().replace(/\W/g,'');


function getComputerChoice(){
    const possibilities = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * 3);
    return possibilities[random];
}
function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection) return "Draw";
    else if(playerSelection === lookUp[computerSelection]) return `You Lose! ${computerSelection} beats ${playerSelection}`;
    else return `You wins! ${playerSelection} beats ${computerSelection}`
}

const h1 = document.createElement("h1");
h1.innerHTML = playRound(playerSelection,computerSelection);
document.body.appendChild(h1);