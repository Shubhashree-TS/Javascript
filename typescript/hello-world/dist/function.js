"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(`when taxYear = 2022 , tax = ${calculateTax(12000)}`);
console.log(`when taxYear = 2000 , tax = ${calculateTax(12000, 2000)}`);
//# sourceMappingURL=function.js.map