// 

/*

===========Primitive DataTypes========== 

- call by value
- stored in Stack

- String, Number, Boolean, null, undefined, symbol, BigInt



===========Non-Primitive DataTypes===========

- call by reference
- stored in Heap

- Array, Objects, FUnctions

*/


const id = Symbol("123")
const id2 = Symbol("123")
console.log(id);
console.log(id2);
console.log(id === id2);


const languages = ["Js", "Py", "Java"]
console.log(languages)

let obj = {
    name: "Tushar",
    age: 17
}
console.log(obj);

const myFunction = function(){
    console.log("Hello from function");
}
console.log(myFunction);
console.log(typeof myFunction);


// =================================

let username = "Tushar"
naam = username
naam = "TusharKumar"
console.log(username);
console.log(naam);

let user = {
    name: "Tushar",
    age: 17
}
user1 = user
user1.name = "TusharKumar"
console.log(user)
console.log(user1)