"use strict";
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`${pt.x} and ${pt.y}`);
class Greeter {
    constructor(otherName) {
        this.name = "shubha";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
const g = new Greeter("sagar");
console.log(g.name);
class tree {
    constructor() {
        this.flower = "anyflower";
    }
}
class plant extends tree {
    constructor(flower) {
        super();
        this.flower = flower;
    }
}
const banana = new plant("bananaflower");
console.log(`${banana.flower}`);
let x = 10;
class MethodsDemo {
    constructor(x) {
        this.x = "ten";
        this.x = x;
    }
    modifingMethod() {
        x = 100;
        return x;
    }
}
const m = new MethodsDemo("eleven");
console.log(m.x);
console.log(m.modifingMethod());
class Square {
    constructor() {
        this._length = 10;
    }
    get length() {
        return this._length;
    }
    ;
    set setlength(value) {
        this._length = value;
    }
    ;
    area() {
        const a = this._length;
        return a * a;
    }
    ;
}
const c = new Square;
class calculate extends Square {
    displaySquare() {
        this.area();
    }
}
class Base {
    constructor(m, n = true, o) {
        this.m = m;
        this.n = n;
        this.o = o;
    }
}
const a = new Base(10, true, "shubha");
console.log(`outside class ${a.m}`);
class Derived1 extends Base {
    check() {
        console.log(`inside Derived1 ${this.m}`);
        console.log(`inside Derived1 ${this.n}`);
    }
}
const b = new Derived1(11, false, 'sagar');
b.check();
class Derived2 extends Base {
    checkAgain() {
        console.log(`inside Derived2 `);
    }
}
//# sourceMappingURL=classes.js.map