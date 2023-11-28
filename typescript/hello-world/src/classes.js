// class Point {}//most basic class : empty one
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    //strictPropertyInitialization => class fields need to be intialized in the constructor
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var pt = new Point();
pt.x = 0;
pt.y = 0;
console.log("".concat(pt.x, " and ").concat(pt.y)); //output: 0 and 0
//readonly:prevents the assignments to the field outside of the constructor
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "shubha";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
var g = new Greeter("sagar");
console.log(g.name); //output : sagar
/* constructors : similar to funcitons
can add parameters, type annotations , default values, overloads


DOUBT:
There are just a few differences between class constructor signatures and function signatures:

Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
Constructors can’t have return type annotations - the class instance type is always what’s returned
*/
//SUPER CALLS 
/* if we have a base class, we should call super() before using this in the constructor*/
var tree = /** @class */ (function () {
    function tree() {
        this.flower = "anyflower";
    }
    return tree;
}());
var plant = /** @class */ (function (_super) {
    __extends(plant, _super);
    function plant(flower) {
        var _this = _super.call(this) || this;
        _this.flower = flower;
        return _this;
    }
    return plant;
}(tree));
var banana = new plant("bananaflower");
console.log("".concat(banana.flower));
//METHODS
/* a function property on a class is called a method
methods can use same type annotations as functions and constructores
*/
var x = 10;
var MethodsDemo = /** @class */ (function () {
    function MethodsDemo(x) {
        this.x = "ten";
        this.x = x;
    }
    MethodsDemo.prototype.modifingMethod = function () {
        x = 100;
        return x;
    };
    return MethodsDemo;
}());
var m = new MethodsDemo("eleven");
console.log(m.x);
console.log(m.modifingMethod());
//GETTERS AND SETTERS: classes can also have accessors
/* if get exits and no set , then readonly*/
var Square = /** @class */ (function () {
    function Square() {
        this._length = 10;
    }
    Object.defineProperty(Square.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Square.prototype, "setlength", {
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Square.prototype.area = function () {
        var a = this._length;
        return a * a;
    };
    ;
    return Square;
}());
var c = new Square;
var calculate = /** @class */ (function (_super) {
    __extends(calculate, _super);
    function calculate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    calculate.prototype.displaySquare = function () {
        this.area();
    };
    return calculate;
}(Square));
//MEMBER VISIBILITY
/* public , private , protected

public: The default visibility of class member is public.
protected: only visible for the subclasses of the class they're declared in , the subclasses can make these private members public
so we need to be careful to repeat the protected modifier
private:its like protected , but doesnt allow access to the member even from subclasses

*/
var Base = /** @class */ (function () {
    function Base(m, n, o) {
        if (n === void 0) { n = true; }
        this.m = m;
        this.n = n;
        this.o = o;
    }
    return Base;
}());
var a = new Base(10, true, "shubha");
console.log("outside class ".concat(a.m)); //, ${a.n}, ${a.o}  these cannot be accesssed
var Derived1 = /** @class */ (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived1.prototype.check = function () {
        console.log("inside Derived1 ".concat(this.m));
        console.log("inside Derived1 ".concat(this.n));
    };
    return Derived1;
}(Base));
var b = new Derived1(11, false, 'sagar');
b.check();
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived2.prototype.checkAgain = function () {
        console.log("inside Derived2 "); //${this.o} i cant access this
    };
    return Derived2;
}(Base));
