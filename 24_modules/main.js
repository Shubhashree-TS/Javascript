import * as Guitars from "./guitar.js"
// import playGuitar from "./guitar.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
import User from "./user.js";
const me = new User("shubhashreets@gmail.com" , "Shubha");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());




