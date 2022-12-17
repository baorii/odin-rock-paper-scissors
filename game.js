/*randomising computer's move*/
function getComputerMove() {
    let x = Math.floor(Math.random() * 3);
    console.log("Number Generated is " + x)
    
    let move = "";
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
    console.log("Number Generated is " + x) 
    console.log("Computer Move is " + move) 
    return move
}

/*Obtaining Player's Move*/
function getPlayerMove() {
    let check = true
    let input = ""
    let move = ""
    while(check) {
        input = prompt("Enter your move: Rock, Paper or Sciccors")
        let move = input.toLowerCase();
        alert(`Your move is ${move}`); // if backticks are 
        
        switch (move) {
            case "rock": 
                check=false; 
                alert("hi");
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
    for(let i=0; i<rounds; i++) {
        let x = getComputerMove()
        let y = getPlayerMove()

        let winner = decideWinner(x,y)
        console.log(winner)
    }
}

let x = getComputerMove();
let y = getPlayerMove();
console.log(x);
console.log(y);

let victor = decideWinner(x,y);
console.log(victor);
