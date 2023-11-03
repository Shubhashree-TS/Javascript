//objects

//key - value pairs in curly braces
//can have nested objects
//can have different values


const myObj={name : "Shubhashree"};

const anotherObj = {
    alive:true,
    answer : 42,
    hobbies :["Eat","Sleep","Code"],
    beverage :{
        morning:"Coffee",
        afternoon:"lunch"
    }   ,
    action :function (){
        return `Time for ${this.beverage.morning}`;
    }
} ;

console.log(anotherObj.hobbies[0]);
console.log(anotherObj.action());


//demonstrating the inheritance in the vehicle and car

const vehicle = {
    wheel : 4,
    engine :function (){
        return "ruuiiiiiii!"
    }
}

//creating the truck 

const truck = Object.create(vehicle);
truck.doors=2;
truck.engine=function (){
    return "turrrrrrr!"
}
console.log(truck);

const car = Object.create(vehicle);
car.doors=4;
car.engine=function(){
    return "wooooooaah!"
}
console.log(car);


const tesla = Object.create(car);
tesla.engine=function (){
    return "shhhhhhhhhhhh!"
}
console.log(tesla.engine());


//tesla inheriting the properties of car , 
//car inheriting the properties of vehicle


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: " John Paul jones",
    drums: "John Bonham"
}


delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band))
console.log(Object.values(band))

for(let job in band){
    console.log(`On ${job}, it's ${band[job]}!`);
}

//destructuring objects
//pulling the value from the key which is inside an object

function sings ({vocals}){
    return `${vocals} sings!`;
}
console.log(sings(band));



const { guitar, vocals, bass, drums} = band;
console.log(guitar, vocals)
const {guitar : myVariable, bass:myBass } = band;
console.log(myVariable)
console.log(myBass);



const ourFamily = {
    father: "Sarpabhushan",
    mother: "Gayathri Devi",
    brother: "Sagar Shilamatt",
    myName: "Shubhashree",
    numberOfMembers : 4, 
    havePets : false
}

//destructuring objects
function sings({myName}){
    return `${myName} sings well!`
}
console.log(sings(ourFamily));

//adding element to object
ourFamily.religious = true;
//checking the newly added key
console.log(ourFamily.hasOwnProperty("religious"));

//extracting keys and values
console.log(Object.keys(ourFamily));
console.log(Object.values(ourFamily));


//changing the value 
const theirFamily = Object.create(ourFamily);
theirFamily.havePets = true;

//iterating through the object
for (let details in theirFamily){
    console.log(`${details} -----> ${theirFamily[details]}`)
}