// 


let a = 10
var b = 20
const c = 30

if (true){
    let a = 100
    var b = 200
    const c = 300

    console.log("A (inside block)", a);
    console.log("B (inside block)", b);
    console.log("C (inside block)", c);
}


console.log("A (outside block)", a);
console.log("B (outside block)", b);
console.log("C (outside block)", c);


// 


function one(){
    const username = "user"

    function two(){
        const website = "github"
        console.log(username);
    }

    // console.log(website);  --> error 

    two()

}

one()


// ==============++++++++++===========================
// Hoisting

console.log(addOne(5)) // can call function before initialization

function addOne(num){
    return num+1
}


// console.log(addTwo(5))  --> can NOT call function before initialization

const addTwo = function(num){
    return num + 2
}