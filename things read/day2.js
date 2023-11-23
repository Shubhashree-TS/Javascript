// ***********************************NUMBER***********************************

Number()
parseInt()//parse a string and returns a whole number
parseFloat()//parse a string and returns a number

//the above three are not number methods, they are global js methods

//Number method:
Number(true)//1
Number(false)//0
Number(10,33)//NaN
Number(10 33)//NaN
Number("shubha")//NaN
//parseInt 
parseInt("years 10")//NaN
parseInt("10 years")//10
//same for parseFloat 


//Number object methods
Number.isInteger()// returns true if the argument is an integer.
Number.isSafeInteger()//A safe integer is an integer that can be exactly represented as a double precision number.
Number.parseInt()//parses a string and returns a whole number.
Number.parseFloat()//parses a string and returns a number.


/* The Number methods Number.parseInt() and Number.parseFloat()
are the same as the Global methods parseInt() and parseFloat().
The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).*/



constructor()//Returns the function that created JavaScript's Number prototype
toExponential()//	Converts a number into an exponential notation
toFixed()//	Formats a number with x numbers of digits after the decimal point
toLocaleString()//	Formats a number with x numbers of digits after the decimal point
toPrecision()//	Formats a number to x length
toString()//	Converts a number to a string
valueOf()//	Returns the primitive value of a number
isFinite()//	Checks whether a value is a finite numbe
isInteger()//	Checks whether a value is an integer


//******************************BOOLEAN METHODS**********************

toSource()//Returns a string representing the source code of the object.
toString()//Converts a boolean value to a string, and returns the result
valueOf()//	Returns the primitive value of a boolean( used implicitly behind code.. not explicitly in the code)


//*************************STRING METHODS****************************** 


charAt()
charCodeAt()
concat()
indexOf()
lastIndexOf()
localeCompare()
length()
match()
replace()
search()
slice()
split()
substr()
substring()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
valueOf()



//***************** STRING HTML WRAPPERS ***********/

anchor()
big()
blink()
bold()
fixed()
fontcolor()
fontsize()
italics()
link()
small()
strike()
sub()
sup()



//***************** ARRAY METHODS ***************/


concat()
every()
filter()
forEach()
indexOf()
join()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
toSource()
sort()
splice()
toString()
unshift()



//********************* DATE METHODS *******************/

Date()
gateDate()
getDay()
getFullYear()
getHours()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
getTime()
getTimezoneOffset()
getUTCDate()
getUTCDay()
getUTCFullYear()
getUTCHours()
getUTCMilliseconds()
getUTCMinutes()
getUTCMonth()
getUTCSeconds()
getYear()
setDay()
setFullYear()
setHours()
setMilliseconds()
setMinutes()
setMonth()
setSeconds()
setTime()
setUTCDate()
setUTCFullYear()
setUTCHours()
setUTCMilliseconds()
setUTCMinutes()
setUTCMonth()
setUTCSeconds()
setYear()
toDateString()
toGMTString()
toLocaleDataString()
toLocaleFormat()
toLocaleString()
toLocaleTimeString()
toSource()
toString()
toTimeString()
toUTCString()
valueOf()




//**************** DATE STATIC METHODS ******************/


Date.parse()
Date.UTC()



//***************** MATH METHODS ************************ */


abs()
acos()
asin()
atan()
atan2()
ceil()
cos()
exp()
floor()
log()
max()
min()
pow()
randow()
round()
sin()
sqrt()
tan()
toSource()


//************** RegExp Methods **************** */


exec()
test()
toSource()
toString()