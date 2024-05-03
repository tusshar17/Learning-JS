// Array
// Arrays in JS are resizeable

const arr1 = [1, 2, 3, "a", "ab", true]
console.log(arr1);


const arr2 = new Array(1, 2, 3, "abc")
console.log(arr2);
console.log(arr2[0]);


// Arrya Methods
arr2.push(true)
arr2.push("last")
console.log(arr2);

arr2.pop()
console.log(arr2);

arr2.unshift("start") // can be time consuming for larger arrays
console.log(arr2);

console.log(arr2.includes(9))
console.log(arr2.indexOf(true))  // returns -1 if not exist

const arr3 = arr2.join()  // type --> string
console.log(arr2);
console.log(arr3);


// slice and splice

const a = [0, 1, 2, 3, 4, 5]
console.log("original array:", a);

const b = a.slice(1, 4)
console.log("sliced array:", b);
console.log("original array after slice:", a);

const c = a.splice(1, 4)
console.log("spliced array:", c);
console.log("original array after splice:", a);