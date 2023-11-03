//Restraunt

const soup = "Tomato Soup";
let consumerIsBanned = false;
let reply ;
let crackers =true;
if (consumerIsBanned){
    reply=`No service for you`;
}else if (soup && crackers){
    reply =`Here is your ${soup} and Crackers`;
}
else if (soup){
    reply=`Here is your ${soup}`;
}else{
    reply= "Sorry we are out of stock";
}


console.log(reply);

//testscore


let score = 76;
let studentOfCollege = true;

if (score >= 89){
    grade = "A";
}else if (score >= 79){
    grade = "B";
}else if (score >= 69){
    grade = "C";
}else if (score >= 59){
    grade = "D";
}else {
    if (studentOfCollege){
        grade = "U";
    }else {
        grade = "F";
    }
}

console.log(grade);

// Rock , Paper and Scissors

let player = 'scissors';
let computer= 'scissors';
let result;


if (player === computer){
    result = 'TIE!'
}else if(player === "rock"){
    if (computer === "paper"){
        result = 'Computer wins!';
    }
    else {
        result = 'Player wins!'
    }
}else if ( player === "paper"){
    if (computer === "scissors"){
        result = 'Computer wins!';
    }else {
        result = 'Player wins!';
    }
}else if ( player === "scissors"){
    if (computer === "rock"){
        result = 'Computer wins!'
    }else {
        result = 'Player wins!'
    }
}


console.log(result)
