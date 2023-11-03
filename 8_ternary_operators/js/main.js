//Ternary operator
//restraunt

let soup= "Tomato Pepper Soup";
let isCustomerBanned = false;

let reply = isCustomerBanned ? 'Sorry! you cannot get our service.'
: soup ? `Here's is your ${soup}`
: `Sorry! soup is out of stock`;

console.log(reply);

//score 

let studentOfCollege=true;
let testScore  = 40 ;
let grade = (testScore >= 90) ? "A" :
(testScore >= 80) ? "B" :
(testScore >= 70) ? "C" :
(testScore >= 60) ? "D" :
(studentOfCollege)? "U" :
"F";
console.log(grade);

//rock paper scissors

let playerone = "rock";
let computer = "scissors";
let result = (playerone === computer) ? "TIE!" :
(playerone ==  "rock" && computer == "scissors") ? "Playerone wins!":
(playerone ==  "paper" && computer == "scissors") ? "Computer wins!":
// (playerone ==  "scissors" && computer == "paper") ? 
"Playerone wins!";
console.log(result)
