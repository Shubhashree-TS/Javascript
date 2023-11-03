//Numbers
const myNumber = 44;
const myFloat = 44.91;
const myanotherFloat = 44.0;



console.log(myNumber);
console.log(myFloat);
console.log(myanotherFloat);


//Number methods
const word = "sushma";
console.log(word + 4);



console.log(Number(word) + 4);
console.log(Number("shubha"));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number(true));
console.log(Number.isInteger(word));



const itsWord = "23.45jjus"
console.log(Number.parseFloat(itsWord));//removes characters other than number
console.log(Number.parseInt(itsWord).toFixed(2))//To fixed returns string

//is integer
console.log(Number.isInteger(parseInt(itsWord)));
console.log(Number.isInteger(parseFloat(itsWord)));


//toString
console.log(typeof Number.toString(parseInt(itsWord)));








