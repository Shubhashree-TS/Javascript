//what is callback function in javascript: first class citizens ( we can take a function and pass it to other function)
//synchronous single threaded language


// setTimeout(function () {
//     console.log("timer")
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })


//if any function blocks the call stack we call it as blocking the main thread. Everything will be blocked in the code
//setTimeout + callback functions = asynchronous 


//event listeners 


//closures demo (used to hide data)
// function attachEventListeners(){
//     let count=0;
//     document. getElementById("clickme").addEventListener("click",function xyz(){
//         console.log("Button Clicked",++count);
//     });
// }
// attachEventListeners();

//garbage collections and remove eventlisteners because they are heavy 
//want extra memory 


// y is a callback function here



//CALLBACK HELL

//js - one thing at a time
//time, tide and js waits for none

// setTimeout( function(){
//     console.log("T S")
// },3000);
// console.log("Shubha")
// console.log("shree")


// const cart =["shoes","pants","kurta"];
// api.createOrder(cart,     function (){
//     api.proceddToPayment(function (){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         });
//     });
// });


//issues with callback:
//unreadable and unmaintainable
//pyramid of DOOM  
///inversion of control :lose the control 



//PROMISES :used to work with asynch operations, is an object representing the eventual completion of an async operation 

// const cart =["shoes","pants","kurta"];

// const promise = createOrder(cart);// { data : undefined(after some time orderDetails)}
// promise.then(function (orderId){
//     proceedToPayment(orderId);
// })
//promise gives us the trust that it call the function when it have the data
//calls the function only once

const GITHUB_API = "https://api.github.com/users/Shubhashree-TS"

const user = fetch(GITHUB_API);
//promise object have  a: prototype , promisestate(state of promise: pending and fullfilled state, rejected ), promiseresult( data returned is store)
//promise objects are immutable


console.log(user)
user.then(function(data){
    console.log(data);
})

/*promise chaining: code does not grow horizontally
                    helps to come out of the callback hell*/


// api.createOrder(cart,     function (){
//     api.proceddToPayment(function (){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         });
//     });
// });

//for the above example

// createOrder(orderId)
// .then(function (orderId){
//    return proceedToPayment(orderId);
// })
// .then(function(orderId){
//   return  showOrderSummary(orderId);
// })
// .then(function(orderId){
//   return  updateWallet(orderId)
// })

// //createOrder(orderId)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWallet(paymentInfo));

const cart = [ 'shoes', 'pants','kurtas'];

//creating an order 

 createOrder(cart)
 .then(function (orderId){
    console.log(orderId) 
    return orderId;
})
.catch(function (err){
    console.log(err.message)
})//only checks the above method
.then(function(orderId){
    console.log("no matter what happens this will be called")
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

//readable, maintainable, and developer friendly 

//Producer end

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid")
            reject(err);
        }
        //logic for create order
        const orderId = "12345";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            },5000);
           
        }
    })
    return pr;
}


function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment successfull");
    });
}


function validateCart(cart) {
    return false;
}


