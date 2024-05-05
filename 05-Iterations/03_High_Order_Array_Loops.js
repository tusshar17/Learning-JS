// ============ for of ============

// can be used on -> arrray, array of objects, string, map
// can not be used on -> objects

const arr = [1, 2, 3]

for (const element of arr) {
    console.log(element);
}


const msg = "hello"
for (const char of msg) {
    console.log(char);
}


// Maps  => no duplicate entries, remembers the order

const countries = new Map()
countries.set("IN", "India")
countries.set("FR", "France")
countries.set("USA", "United States of America")

console.log(countries);

for (const [code, country] of countries) {
    console.log(`${code} is code for ${country}`);
}


// =========== for in ==================

// can be used on -> arrays, object
// can not be used on on -> maps

const languages = {
    py: "Python",
    js: "JavaScript",
    cpp: "C++"
}

for (const extension in languages) {
    console.log(`${extension} is extension for ${languages[extension]} language`);
}


const frameworks = ["Django", "Flask", "Spring"]

for (const key in frameworks) {
    console.log(frameworks[key]);
}

const txt = "hello world"
for (const index in txt) {
    console.log(txt[index]);
}


// ========== forEach =========

const people = ["sam", "freddy", "chaman"]

people.forEach( (person) => {
    console.log(person);
} )

const addTitle = (firstname) => {
    console.log("Mr.", firstname);
}

people.forEach(addTitle)

people.forEach( (person, index, list) => {
    console.log(`${person} is present at index ${index} in`, list);
} )


const data = [
    {
        language: "Python",
        frameworks: ["Flask", "Django", "FastAPI"]
    },
    {
        language: "JavaScript",
        frameworks: ["Express", "React"]
    }
]

data.forEach((item) => {
    console.log("==========");
    for (const key in item) {
        console.log(key, ":", item[key]);
    }
});