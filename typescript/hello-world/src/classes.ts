// class Point {}//most basic class : empty one

class Point {
    x:number;
    y:number;

    //strictPropertyInitialization => class fields need to be intialized in the constructor
    constructor(){
        this.x=0;
        this.y=0;

    }

}
const pt = new Point();
pt.x=0;
pt.y=0;

console.log(`${pt.x} and ${pt.y}`)//output: 0 and 0


//readonly:prevents the assignments to the field outside of the constructor

class Greeter{
    readonly name: string = "shubha";

    constructor(otherName?:string){
        if(otherName!==undefined){
            this.name = otherName;
        }
    }

}
const g = new Greeter("sagar");
console.log(g.name);//output : sagar

/* constructors : similar to funcitons
can add parameters, type annotations , default values, overloads


DOUBT:
There are just a few differences between class constructor signatures and function signatures:

Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
Constructors can’t have return type annotations - the class instance type is always what’s returned
*/

//SUPER CALLS 
/* if we have a base class, we should call super() before using this in the constructor*/


class tree {
    flower = "anyflower";
}

class plant extends tree {
    
    constructor(flower:string){
        super();
        this.flower = flower;
    }
} 

const banana = new plant("bananaflower")
console.log(`${banana.flower}`)


//METHODS
/* a function property on a class is called a method
methods can use same type annotations as functions and constructores
*/


let x : number =10;
class MethodsDemo{
    x: string = "ten";
    constructor(x:string){
        this.x = x;
    }
    modifingMethod(): number{
        x = 100;
        return x;
    }
}
const m = new MethodsDemo("eleven");
console.log(m.x);
console.log(m.modifingMethod());


//GETTERS AND SETTERS: classes can also have accessors
/* if get exits and no set , then readonly*/ 

class Square {
     _length:number ;
    constructor(){
        this._length = 10;
    }
    get length(){
        return this._length;
    };
    set setlength(value:number){
        this._length = value;
    };
    area():number{
        const a = this._length;
        return a*a;
    };
}


const c = new Square;
class calculate extends Square {
    displaySquare(){
        this.area();
    }
}








//MEMBER VISIBILITY
/* public , private , protected

public: The default visibility of class member is public. 
protected: only visible for the subclasses of the class they're declared in , the subclasses can make these private members public
so we need to be careful to repeat the protected modifier
private:its like protected , but doesnt allow access to the member even from subclasses

*/

class Base {
 public m : number ;
 protected n : boolean ;
 private o : string ;
 
constructor(m:number,n=true,o:string){
    this.m = m;
    this.n = n;
    this.o = o;
}
}

const a = new Base(10,true,"shubha");
console.log(`outside class ${a.m}`)//, ${a.n}, ${a.o}  these cannot be accesssed




class Derived1 extends Base {

   check(){
    console.log(`inside Derived1 ${this.m}`);
    console.log(`inside Derived1 ${this.n}`)
   }
}

const b = new Derived1(11,false,'sagar');
b.check();

class Derived2 extends Base {
    checkAgain(){
        console.log(`inside Derived2 `)//${this.o} i cant access this
    }
}

