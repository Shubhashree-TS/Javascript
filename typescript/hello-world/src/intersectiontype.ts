//In Intersection type the element should be of both types

//here we use custom types





//TO BE CORRECTED



type Dragable = {
    drag:() => void;
};

type Resizable ={
    resize:() => void;
};

type UIWidget = Dragable & Resizable;

let textBox : UIWidget = {
    drag:()=>{return console.log('hi')},
    resize: ()=> {console.log('hello')}
};

console.log(textBox.drag);



