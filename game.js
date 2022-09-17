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

computerMove = getComputerMove()

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

/*Playing multiple rounds*/