var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
//Union Type and interface
console.log("UNION TYPE AND INTERFACE");
//commandline as string 
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["Hello", "World"] };
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
//commandline as a function expression 
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
console.log("INTERFACE AND ARRAY");
var agelist;
//  agelist["John"] = 15   // Ok 
//  agelist[2] = "nine" 
console.log("INTERFACE AND INHERITANCE");
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
