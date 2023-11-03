//Functions

// Methods = Built in functions

"Shubhashree".toLowerCase();
Math.random();



//function declaration syntax

// function sum() {
//     return 2 + 2;
// }
// console.log(sum());

function sum(num1, num2) {
    console.log(num1, num2);
    if(num2 === undefined){
        return num1 +num1;
    }
    return num1 +num2;
}
console.log(sum(8));
console.log(sum(3,4));


//getting username from email
function getUserNameFromEmail(email) {
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("shubhashreets09@gmail.com"))




//arrow functions
const getUserNameFromEmail = (email) => {return email.slice(0,email.indexOf("@"))};
console.log(getUserNameFromEmail("sagarshilamatt@gmail.com"));


const toProperCase = (nameCase) {
    return name.charAt(0).toUpperCase(("september"))
}