/*randomising computer's move*/
function getComputerMove() {
    let x = Math.random(2) /*0 based indexing?*/
    console.log(x)
    let move = ""
    switch (x) {
        case 0: 
            move = "Rock"; break;
        case 1: 
            move = "Paper"; break;
        case 2: 
            move = "Scissors"; break;
        default: 
            move = "Rock"; break;
    }
    return move
}

/*Obtaining Player's Move*/
function getPlayerMove() {
    let check = true
    let x 
    while(check) {
        x = prompt("Enter your move: Rock, Paper or Sciccors")
        move = x.toLowerCase
        switch (move) {
            case "rock": 
                check=false; break;
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
    for(let i=0; i<rounds; i++) {
        let x = getComputerMove()
        let y = getPlayerMove()

        let winner = decideWinner(x,y)
        console.log(winner)
    }
}

