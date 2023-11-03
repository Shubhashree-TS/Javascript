//switch statements
// Rock , Paper , Scissors

let playerOne = "scissors";
let computer = "rock";

switch (playerOne){
    case computer:
        console.log("It's a TIE!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("computer wins");
        }else {
            console.log("player wins!");
        }
        break;
    case "paper":
        if (computer === "scissors"){
            console.log("computer wins");
        }else {
            console.log("player wins!");
        }
        break;
    default:
        if (computer === "rock"){
            console.log("computer wins");
        }else {
            console.log("player wins!");
        }
        break;
}