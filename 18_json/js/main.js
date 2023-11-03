//JSON javascript object notation 

/* JSON is used to send and receive data.
JSON is a text format that is completely language independent . 
Meaning JSON is used to send and recieve data in many languages .. not just in Javascript
*/

const myObj ={
    name: "Shubhashree",
    hobbies:['eat','sleep','code'],
    hello:function (){
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();

const sendJSON = JSON.stringify(myObj);//methods will be lost here
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);// we cannot access properties like object

const receiveJSON  = JSON.parse(sendJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.hobbies);//we can recieve the converted json but this dont have methods
console.log(receiveJSON.name);

