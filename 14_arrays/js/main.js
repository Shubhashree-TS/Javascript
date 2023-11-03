//Arrays

const myArray = [];

//add elements to array
myArray[0] = "Shubha";
myArray[1] = 93;
myArray[2] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);


//adding element to the array
//unshift - adds to the starting 
//push - adds to the end
const arraylength = myArray.push("home");
myArray.unshift("school");
console.log(myArray);



//pop - removes element from the end and returns it
const lastItem = myArray.pop();
const firstItem = myArray.shift();
console.log(lastItem);
console.log(firstItem);
console.log(myArray);


//if you try to display which is not there you get undefined

//if you delete an item in between its position remains the same. 

delete myArray[1];
console.log(myArray);

//if you want to delete an array item without leaving its position you should use splice 

myArray.splice(1,1);
console.log(myArray);

//if you want to replace its position with other value

myArray.splice(1,1,"sagar");
console.log(myArray);




const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F"];

//joining to arrays
//joining in different methods

const concatinatedArray = myArrayB.concat(myArrayA);
console.log(concatinatedArray);


//spread operator : forming a new array, not a nested array
const spreadOperator = [...myArrayA,...myArrayB];
console.log(spreadOperator);
const notSpreadOperator = [myArrayA,myArrayB];
console.log(notSpreadOperator);


//referring to multi-dimensional array

const ornaments = ['jhumkas', 'bangle', 'anklets'];
const clothes = ['chudidaar','saree','jeans'];
const bag = ['cluthes','tourist-bag'];
const cosmetics = ['eyeshadow','kajal','bindi'];


const ornamentsAndClothes = [ornaments,clothes];
const bagAndCosmetics =[bag, cosmetics];

const belongings = [ornamentsAndClothes,bagAndCosmetics];
console.log(belongings);

//in order to select kajal from belongings
console.log(belongings[1][1][1]);









