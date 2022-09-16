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
}

computerMove = getComputerMove()