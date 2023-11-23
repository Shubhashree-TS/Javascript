//if nothing is there js always returns undefined
//ts is very strict of the arguments passed 

function calculateTax(income:number, taxYear = 2022): number {
    if(taxYear < 2022){
        return income * 1.2;
    }
   return income *1.3;
}

console.log(`when taxYear = 2022 , tax = ${calculateTax(12000)}`);//this is accepting only one parameter also

/*here the function will be considered as , where taxYear is optional 

function calculateTax(income: number, taxYear?: number): number*/
console.log(`when taxYear = 2000 , tax = ${calculateTax(12000,2000)}`)




//here we can change the noUnusedLocals, noUnusedParameter, noImplicitReturns in tsconfig.json



/* output:
when taxYear = 2022 , tax = 15600
when taxYear = 2000 , tax = 14400 */


