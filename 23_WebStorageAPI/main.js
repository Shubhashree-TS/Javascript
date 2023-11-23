window.alert("ok!");
alert("location");

const myArray = ['eat','sleep','code'];

//local Storage
const myObject = {
    name:"Shubha",
    hobbies:['eat','sleep','code'],
    logName: function () {
        console.log(this.name);
    }
}



//sessionStorage - keeps data only during session (only store string data)
sessionStorage.setItem("mySessionStore",myArray);//see this in application->Storage->Session Storage
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(typeof mySessionData);
console.log(mySessionData);

sessionStorage.setItem("sessionStore",JSON.stringify(myObject));
const sessionStoreData= JSON.parse(sessionStorage.getItem("sessionStore"));
console.log(typeof sessionStoreData);
console.log(sessionStoreData)


sessionStorage.setItem("jsonSessionStore", JSON.stringify(myArray));
const jsonSessionStore= JSON.parse(sessionStorage.getItem("jsonSessionStore"));
console.log(typeof jsonSessionStore);
console.log(jsonSessionStore);//session storage

localStorage.setItem("jsonLocalStore", JSON.stringify(myArray));
const localSessionStore= JSON.parse(localStorage.getItem("localSessionStore"));
console.log(typeof localSessionStore);
const length = localStorage.length;
console.log(length);//length of local storage
const key = localStorage.key(0);
console.log(key);//specify the key
localStorage.removeItem("localSessionStore");//removing an item
localStorage.clear();//clearing everything
console.log(localSessionStore);         //local storage











