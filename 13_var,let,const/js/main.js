//var , let and const




//global scope is available to all, not in a function or block, not desirable

//local - in a function or block, not global.

//var - instantiates function() scoped variables

//let and const instantiates {block} scoped variables, they respect the curly braces.

//tips: avoid using var, stick with const and let
//use const unless you need to reassign value
//use let if you know you will reassign value

var x = 1;
let y = 2;
const z = 3;


console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFun(){
    var x = 4;
    const z = 6;
    {
        var x = 9;//function scoped
        const z = 10;//only block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
    
}

myFun();