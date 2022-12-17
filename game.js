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
                check=false; 
                break;
                
            case "paper": 
                check=false; break;
            case "scissors": 
                check=false; break;
            default: 
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

/*Playing multiple rounds*/
function playRound(rounds) {
    playerWins = 0
    computerWins = 0
    

    for(let i=0; i<rounds; i++) {
        alert(`Round ${i+1} Begins`)
        let x = getComputerMove()
        let y = getPlayerMove()

        let winner = decideWinner(x,y)

        if (winner == 'player') {
            alert(`Round winner is ${winner}`)
            playerWins += 1
        }else if(winner == 'computer') {
            alert(`Round winner is ${winner}`)
            computerWins += 1
        }else{
            alert('Round was a draw')
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

/*Testing*/
let x = getComputerMove();
let y = getPlayerMove();
console.log(`Computer move is ${x}`);
console.log(`Player move is ${y}`);

let victor = decideWinner(x,y);
console.log(`Winner is ${victor}`);
alert(`Winner is ${victor}`);

/*Culmination*/
let rounds = parseInt(prompt('How many rounds would you like to play?'))
playRound(rounds);


