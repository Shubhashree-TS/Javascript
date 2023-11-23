//async: keyword used before async function
//this will always return promise
//if any value other than promise is returned , this function take this inside a promise and wrap it and then it return 

// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved value!");
// });


// async function getData(){
// return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then(res => console.log(res));

//HOW CAN ASYNC AND AWAIT WORKS BEHIND THE SCENES

//they are used to handle promises
const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved Value!")
    },10000)
    resolve("Promise resolved value!");
});

//await is a keyword that can only be used inside async function  
//await is used infront of the promise that has to be resolved
async function handlePromise() {
    //js engine was waiting for promise to resolve. 
    const val = await p;
    console.log("namaste shubha");
    console.log(val);
}
handlePromise();


function getData() {
    //JS Engine will not waits for promise to be resolved this behaviour will be very confusing for the developer

    p.then(res => console.log(res));
    console.log("Namasthe Shubhashree")
}

getData();

//DIFFERENCE BETWEEN OLDER WAY AND ASYNC AWAIT



