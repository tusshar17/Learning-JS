
// <, >, <=, >=, ==, ===, !=, !==
// &&, ||


// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, Nan
// truthy values -> "0", "false", [], " ", {}, function(){}

// if

let isUserLoggedIn = true

if (isUserLoggedIn){
    console.log("user is logged in.");
}


if (2!=3){
    console.log("2 is not equal to 3.");
}


if (2=="2"){
    console.log("2 of string == 2 of number");
}


if (2==="2"){
    console.log("2 of string === 2 of number");
}


// if else
isUserLoggedIn = false
if (isUserLoggedIn){
    console.log("user logged in");
}
else{
    console.log("user is not logged in");
}


// if else if

const score = 57

if (score==0){
    console.log("game started");
}
else if (score>0 && score<50){
    console.log("level 1");
}
else if (score>=50 && score<100){
    console.log("level 2");
}
else{
    console.log("game won!");
}



// Terniary Operator
// condition ? true : false

const price = 10

price>=100 ? console.log("expensive") : console.log("affordable")
