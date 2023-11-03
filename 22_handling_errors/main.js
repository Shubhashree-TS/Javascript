//javascript errors and error handling
"use strict";

//reference error
try{
    variable = "shubha";
    console.log(variable);
}
catch(err){
    console.log(`the ${err.name} has occured`)
}
finally{
    console.log(`this is the finally block`);
}




// //syntax error
// Object..create();


// //type error
// const name = "sagar"
// name = "bhushan";


function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack =`${this.name} : ${this.message}`;

}


const makeError = () => {
    let i =1;
    while(i<=5){
        try{
            const name = "prabha";
            name = "utkarsh";
            throw new customError("this is a custom error");
           
        }catch(err){
            console.log(err);
            console.error(err);
            console.error(err.name);
            console.error(err.message);
            console.error(err.stack)
            console.warn(err);
            console.table(err);
        }finally {
            console.log("....finally");
            i++;
            console.log(i);
        }
    
    }
    
}

makeError();
