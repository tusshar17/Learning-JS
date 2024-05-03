// 


function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}


const res = addTwoNumbers(2, 3)
console.log(res);



// 

function logInUserMessage(username){
    return `${username} logged in successfully.`
}

console.log(logInUserMessage());
console.log(logInUserMessage(""));
console.log(logInUserMessage("Tushar"));
console.log(logInUserMessage(123));
console.log(logInUserMessage(true));
console.log(logInUserMessage([1,2,3]));

function logInUserMessage2(username="default"){
    return `${username} logged in successfully.`
}

console.log(logInUserMessage2());




// ----- rest operator -----
// unknown number of parameters

function calcultePrice(...prices){
    return prices
}
console.log(calcultePrice(10, 20, 30));