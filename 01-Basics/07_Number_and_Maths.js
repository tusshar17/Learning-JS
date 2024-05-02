const num = 400
console.log(num)

const num2 = new Number(500)
console.log(num2)


console.log(num2.toString())

console.log(num2.toFixed(2))

const num3 = 23.658745
console.log(num3.toPrecision(3)) // left to right


// 
const hundreds = 1000000
console.log(hundreds.toLocaleString("en-us")) // US version i.e. 100k/1million etc
console.log(hundreds.toLocaleString()) // Indian version


// MIN and MAX value
const maxValue = Number.MAX_SAFE_INTEGER
const minValue = Number.MIN_SAFE_INTEGER
console.log(maxValue)
console.log(minValue)




// --------------------- Maths ------------------------------------

console.log(Math)
console.log(Math.abs(-4.343))
console.log(Math.round(4.343))
console.log(Math.ceil(4.343))
console.log(Math.floor(4.343))
console.log(Math.sqrt(256))
console.log(Math.min(3,5,6,4,2))
console.log(Math.max(3,5,6,4,2))

console.log(Math.random())
console.log(Math.round(Math.random() * 10 + 1)) // +1 to avoid zero

// generate random value in a given range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);