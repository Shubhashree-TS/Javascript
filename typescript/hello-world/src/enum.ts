//enum is list of related constants

const small =1;
const medium =2;
const large = 3;

//instead of defining the elements like this 

const enum Size {Small, Medium, Large};
//here the default 0 , 1, 2 values are assigned to the elements respectively
//if Small =1, then Medium and Large will be 2 and 3 respectively
//if we want to assign different values

const enum Members {Father="Bhushan", Brother="Sagar", Mother="Gayathri"};
let myFather: Members = Members.Father;
console.log(`My Father is ${myFather}`); //output: My Father is Bhushan
