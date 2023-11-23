//In Union type we can give variable type more than 1 time

function kgToLbs (weight : number | string){
  // narrowing
    if(typeof weight === "number"){
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}

console.log(`weight in number : ${kgToLbs(200)}`);
console.log(`weight in string : ${kgToLbs('200')}`);


/* output:
weight in number : 440.00000000000006
weight in string : 440.00000000000006 */