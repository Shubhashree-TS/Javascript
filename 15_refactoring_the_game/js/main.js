alert("Welcome to Rock, Paper, Scissors");


let decisionOfPlayer = confirm("Do you want to play");
if(decisionOfPlayer){
    let playerChoice = prompt("select one among rock, paper , scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerNumber = Math.floor(Math.random() * 3 + 1);
            let computer = (computerNumber === 1) ? "rock" : (computerNumber === 2) ? "paper" : "scissors";
            let result = (playerOne === computer) ? "TIE!" :
            (playerOne === "rock" && computer === "paper") ? `PlayerOne: ${playerOne} \n Computer :${computer} \n Computer Wins!` :
            (playerOne === "scissors" && computer === "paper") ? `PlayerOne: ${playerOne} \n Computer :${computer} \n Player Wins!` :
            /* (playerOne === "scissors" && computer === "rock") ? */ `PlayerOne: ${playerOne} \n Computer :${computer} \n Player Wins!` ;
            alert(result);
            let again = confirm("Another match?!");
            again ? location.reload() : alert("Okay! Thanks for playing");
        }else {
            alert("You haven't entered 'rock' , 'paper' or 'scissors' ");
        }
    }else{
        alert("I think you changed your mind. Maybe next time!")
    }
}else {
    alert("Okay! let's try next time");
}