//interface: syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to .
//properties, method , events which 
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
//Union Type and interface
console.log("UNION TYPE AND INTERFACE")


interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 //commandline as string 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 //commandline as a string array 
 options = {program:"test1",commandline:["Hello","World"]}; 
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
 
 //commandline as a function expression 
 options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
 var fn:any = options.commandline; 
 console.log(fn());

console.log("INTERFACE AND ARRAY")

interface namelist { 
    [index:number]:string 
 } 
 
//  var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
 interface ages { 
    [index:string]:number 
 } 
 
 var agelist:ages; 
//  agelist["John"] = 15   // Ok 
//  agelist[2] = "nine" 

 console.log("INTERFACE AND INHERITANCE")

 interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)

 interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Child extends IParent1, IParent2 { } 
 var Iobj:Child = { v1:12, v2:23} 
