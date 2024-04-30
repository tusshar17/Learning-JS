// 


"use strict";  // newer version

// alert("Hello") --> not runnable while using nodejs, works in browsers

// is ; necessary? NO


let name = "Tushar"
let age = 17
let isSmart = true
const girlfriend = null

/*

Primitive DataTypes :
- number
- bigint
- string
- boolean
- null -> standalone value
- undefined -> variable declared but value not assigned.
- symbol

*/


// typeof -> find type of any value
console.log(typeof "Hello")
console.log(typeof 24324.2);
console.log(typeof age)
console.log(typeof isSmart);

console.log(typeof undefined); // undefined
console.log(typeof null); // object