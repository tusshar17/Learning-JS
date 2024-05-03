// 

// Singleton --> object.create




// object literals
const user = {
    name: "Tushar",
    "last name": "Kumar",
    age: 17,
    country: "India"
}

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user["last name"]);

// chaning values in object
user.name = "Rohan"
console.log(user);

// Object.freeze(user) --> no changes will be allowed


// adding values in object
user.greet = function(){
    console.log(`Hello from ${this.name}`)
}
user.greet()



// how to use symbol in an object as key
const mySymbol = Symbol("Symbol 1") 
const obj = {
    [mySymbol]: "My Symbol"
}
console.log(obj);