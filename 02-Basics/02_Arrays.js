// 

const languages = ["python", "js", "java"]
const frameworks = ["django", "react", "spring"]

// languages.push(frameworks)
// console.log(languages);

const languages_and_frameworks = languages.concat(frameworks) 
console.log(languages_and_frameworks);


// -----------spread operator-----------------

const arr = [...languages, ...frameworks]
console.log(arr);


const messy_array = [1, 2, 3, 4, [5, 6, 7], [[1, 2], 2], 3]
const flat_array = messy_array.flat(Infinity)
console.log(flat_array); 


// --------------------------------

console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));