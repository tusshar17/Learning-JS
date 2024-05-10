// 

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);


const user = {
    name: "user",
    age: 18
}


console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "age"));

Object.defineProperty(user, "age", {
    writable: false,
    enumerable: true
})

user.age = 20

console.log(user);



// try to change PI value
/*
Object.defineProperty(Math, "PI", {writable:true})  --> TypeError: Cannot redefine property: PI
Math.PI = Math.round(Math.PI)
console.log(Math.PI);
*/