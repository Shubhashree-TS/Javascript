const _ = require('lodash');
const numbers = [ 45,56,67,78];
_.each(numbers, function(number,i){
    console.log(number);
});