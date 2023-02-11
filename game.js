/*randomising computer's move*/
function getComputerMove() {
    let x = Math.floor(Math.random() * 3);
    console.log("Number Generated is " + x)
    
    let move = "";
    switch (x) {
        case 0: 
            move = "rock"; break;
        case 1: 
            move = "paper"; break;
        case 2: 
            move = "scissors"; break;
        default: 
            move = "rock"; break;
    }
    return move
}

/*Obtaining Player's Move*/
function getPlayerMove() {
    let check = true
    let input = ""
    let move = ""
    while(check) {
        input = prompt("Enter your move: Rock, Paper or Sciccors")
        move = input.toLowerCase();
        alert(`Your move is ${move}`); // if backticks are used then ${} concatenation can be used
        
        switch (move) {
            case "rock": 
                check=false; break;
            case "paper": 
                check=false; break;
            case "scissors": 
                check=false; break;
            default: 
                alert('Invalid. \n Enter a valid move!')
                 break;
    }
}
    return move
}

/*Deciding Winner*/
function decideWinner(computerMove, playerMove) {
    let winner="";
    switch (computerMove) {
        case "rock":
            if (playerMove == "rock") {
                winner="draw"; }
            if (playerMove == "paper") {
                winner="player"; }
            if (playerMove == "scissors") {
                winner="computer"; }
            break; 
        case "paper":
            if (playerMove == "rock") {
                winner="computer"; }
            if (playerMove == "paper") {
                winner="draw"; }
            if (playerMove == "scissors") {
                winner="player"; }
            break; 
        case "scissors":
            if (playerMove == "rock") {
                winner="player"; }
            if (playerMove == "paper") {
                winner="computer"; }
            if (playerMove == "scissors") {
                winner="draw"; }
            break;  
        default: break;
    }
    return winner;
}

/*Playing a round*/
function playRound(btnID) {
    let x = getComputerMove()
    let y = btnID

    const insertDiv = document.querySelector('#insert');

    const computerMove = document.createElement('p');
    const playerMove = document.createElement('p');

    computerMove.textContent = (`Computer move is ${x}`);
    playerMove.textContent = (`Player move is ${y}`);
    
    insertDiv.appendChild(computerMove);
    insertDiv.appendChild(playerMove);


    let winner = decideWinner(x,y)

    const roundWinner = document.createElement('p');
    roundWinner.textContent = (`Winner is ${winner}`);
    insertDiv.appendChild(roundWinner);

    if (winner == 'player') {
        alert(`Round winner is ${winner}`)
        return 0
        
    }else if(winner == 'computer') {
        alert(`Round winner is ${winner}`)
        return 1
        
    }else{
        alert('Round was a draw')
        return 3
    }
    
}

/*Playing multiple rounds*/
function playMultiple(rounds){
    playerWins = 0
    computerWins = 0

    for(let i=0; i<rounds; i++) {
        alert(`Round ${i+1} Begins`)
        x = playRound();
        if(x==0) {
            playerWins +=1
            console.log(`Player win count: ${playerWins}`);
        }else if (x==1) {
            computerWins += 1
            console.log(`Computer win count: ${computerWins}`);
        }else {
        }
    }
    alert('Results time:')
    if (playerWins > computerWins){
        alert(`Match winner is the Player`)
    }else if(playerWins < computerWins){
        alert(`Match winner is the Computer`)
    }else{
        alert('Match resulted in a draw')
    }
}

/*Testing
let x = getComputerMove();
let y = getPlayerMove();
console.log(`Computer move is ${x}`);
console.log(`Player move is ${y}`);

let victor = decideWinner(x,y);
console.log(`Winner is ${victor}`);
alert(`Winner is ${victor}`);

/*Culmination
let rounds = parseInt(prompt('How many rounds would you like to play?'))
playRound(rounds);
*/


//Button events
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => { playRound(button.id); } );
});