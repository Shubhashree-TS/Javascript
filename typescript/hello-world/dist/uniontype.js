"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(`weight in number : ${kgToLbs(200)}`);
console.log(`weight in string : ${kgToLbs('200')}`);
//# sourceMappingURL=uniontype.js.map