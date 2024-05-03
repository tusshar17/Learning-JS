// Date

let dateObj = new Date()
console.log(dateObj.toString());

console.log(dateObj.toISOString());

console.log(dateObj.toLocaleDateString());

console.log(dateObj.toLocaleString());

console.log(dateObj.toJSON());


// creating a date objet with values
let createdDate = new Date(2023, 0, 23)  // months start from 0 in JS
console.log(createdDate.toDateString());

let createdDateTime = new Date(2023, 3, 22, 18, 20)
console.log(createdDateTime.toLocaleString());


// timestamp
let timestamp = Date.now()
console.log(timestamp);


//
console.log(createdDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
}))