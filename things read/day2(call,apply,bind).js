//CALL METHOD

let name = {
    firstName : "Shubhashree",
    lastName : "T S"
    
}

let printFullName = function (hometown,state){
    console.log(`${this.firstName} ${this.lastName} from ${hometown} , ${state}`);
}

printFullName.call(name, "Shivamogga","Karnataka");

let name2 = {
    firstName: "Sagar",
    lastName:"Shilamatt"
}

//using call method we can borrow function from other objects 

printFullName.call(name2, "Bengaluru","Karnataka");//'this' in the printFullName should point to name2 object


//APPLY METHOD
//the common difference between call and apply method are the way we pass the arguments
//arguments are passed in array list
printFullName.apply(name2, ["Chennai","TamilNadu"]);


//BIND METHOD
//function borrowing
let printMyName = printFullName.bind(name2,"Mangaluru","Karnataka");
console.log(printMyName);
printMyName();
//printMyName is a function which is a copy of printFullName that can be invoked anytime


//preserving this ::   https://www.w3schools.com/js/js_function_bind.asp




