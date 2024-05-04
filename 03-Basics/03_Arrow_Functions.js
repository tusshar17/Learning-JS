// 


const user = {
    username: "Tushar",
    price: 999,

    welcome: function(){
        console.log(`${this.username}, welcome to the website.`);
        console.log(this);
    }
}


// user.welcome()
// user.username = "David"
// user.welcome()

console.log(this);


function myFunction(){
    let username = "tushar"
    console.log(this.username);
}

myFunction()


// -------------+++++++++++++++++++++++++++----------------------

const arrowFun = () => {
    let username = "tushar"
    console.log(this.username);
}

arrowFun()


// implicit return 
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(2, 3));


const getObj = () => ({name: "tushar"})  // objects should always be wrapped in paranthese in implicit return
console.log(getObj());