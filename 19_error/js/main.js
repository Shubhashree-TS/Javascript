//javascript errors and error handling
"use strict;"
const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    }catch (err) {
        console.log("error");
        console.error(err.message);
        console.error(err.stack);
        console.error(err.name);
        
    }
}
makeError();


function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}