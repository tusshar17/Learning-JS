const product = "Headphones"
console.log(product[0]);

const price = 500

// console.log(product + " " + price + " Rs."); --> old style

console.log(`The product is ${product} and the price is ${price} Rs.`);  // new and more readable style

const appName = new String("App-Name")
console.log(appName);

console.log(appName.__proto__);
console.log(appName.length);
console.log(appName.toUpperCase());
console.log(appName.toLowerCase());
console.log(appName.charAt(2));
console.log(appName.indexOf("N"));
console.log(appName.toLowerCase().includes("app"));

const newAppName = appName.substring(2,5) // (start-index, endindex-1)  // -ve value will be set to 0
console.log(newAppName);

const anotherAppName = appName.slice(-4, 6) // -ve value, -ve indexing
console.log(anotherAppName);

const title = "Hello World"
console.log(title.replace(" ", "-"));

// 
const someMsg = "hello this is JavaScript"
console.log(someMsg.split(" "));