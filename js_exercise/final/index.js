class Counter{
    #counterValue = 0;
    
    constructor(){
        this.#valueUpdate();
    }

    increment(){
        this.#counterValue++;
        this.#valueUpdate();
    }

    decrement(){
        this.#counterValue--;
        this.#valueUpdate();
    }

    #valueUpdate(){
        document.getElementById("counterValue").innerText= this.#counterValue;
    }


}

const count = new Counter();


const incrementBtn = document.getElementById("increase")
const decrementBtn = document.getElementById("decrease")
console.log(incrementBtn)

incrementBtn.addEventListener('click',()=>count.increment());
decrementBtn.addEventListener('click',()=>count.decrement());
