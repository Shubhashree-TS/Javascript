//javascript event listeners


const mouseover = () => {
    h2.textContent ="you hovered the button below"
 };
const mouseout = () => {
    h2.textContent ="mouseout"
 };
const click = () => {
    h2.textContent ="you have clicked the button below"
 };
const doSomething = () => {
    eventIndicator.textContent="Event is happening!"
    alert('Event is happening')
}
const doNothing = () => {
    eventIndicator.textContent = "Event is stopped";
    addButton.removeEventListener("click",doSomething,false)
}
 function removeh2(){
    h2.removeEventListener("clicked",doSomething, false);
}

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
const changeButton = document.getElementById("changeText");
const removeButton = document.getElementById("removeEvent");
const addButton = document.getElementById("addEvent");
const eventIndicator = document.getElementById("reference")
console.log(removeButton)
changeButton.addEventListener("mouseover",mouseover,false);
changeButton.addEventListener("mouseout",mouseout,false);
changeButton.addEventListener("click",click,false);
addButton.addEventListener("click",doSomething,false);
removeButton.addEventListener("click",doNothing,false);




//page loading process
document.addEventListener("readystatechange",(event) => {
    if (event.target.readyState === "complete" ){
        console.log("readyState:complete");
        initApp();
    }
})


//bubbling up is default
//inside to out
//event target

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    view.addEventListener("click",(event) => {
        view.classList.add("purple");
        view.classList.remove("darkblue")
        view.style.backgroundColor = "purple";

    });
    div.addEventListener("click", (event) => {

        div.style.backgroundColor = 'blue';
    });
    h2.addEventListener("click",(event) => {
        h2.textContent = "clicked";
    });
}


//use capture
//out to in

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");
//     view.addEventListener("click",(event) => {
//         event.stopPropagation();
//         view.style.backgroundColor = "purple";

//     },true);
//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = 'blue';
//     },true);
//     h2.addEventListener("click",(event) => {
//         event.target.textContent = "clicked";
//     },true);
// }