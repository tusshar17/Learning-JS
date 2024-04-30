// 


let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//
let num = "33"
console.log(typeof num);
console.log(num);

let numConverterd = Number(num)
console.log(typeof numConverterd);
console.log(numConverterd);


//
let num1 = null
let num1Converted = Number(num1)
console.log(typeof num1Converted);
console.log(num1Converted);


/*

Any Type to Number:

"33" -> 33
"33abc" -> NaN
true -> 1
false -> 0

*/

// ----------------------------------------------

/*

Any Type to Boolean:

"33" -> true
"" -> false
1 -> true
0 -> false

*/


let xyzNum = 10
let stringxyzNum = String(xyzNum)
console.log(typeof stringxyzNum)
console.log(stringxyzNum)



// --------------------- Operations -------------------
let val = 5
let negativeVal = -val
console.log(negativeVal)

console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log("hello" + " " + "world");