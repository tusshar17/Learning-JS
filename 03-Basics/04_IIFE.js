// Immediatelt Invoked Function Expressions (IIFE)

(function sayHello(){   // --> named IIFE
    console.log("Hello");
}) (); // ; to end context

( (x) => {
    console.log(`Hello ${x}`);
}) ("Tushar")