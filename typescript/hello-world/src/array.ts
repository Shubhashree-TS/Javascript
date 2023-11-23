let numbers = [1,2,3];//this 'numbers' array is infered as number

let definedNumbers : string[] = ['shubha','sagar','bhushan'];//explicitly defined array

for(var i in definedNumbers){
    console.log(`name '${definedNumbers[i]}' length is: ${definedNumbers[i].length}`)
}

/* output:
name 'shubha' length is: 6
name 'sagar' length is: 5
name 'bhushan' length is: 7
*/




