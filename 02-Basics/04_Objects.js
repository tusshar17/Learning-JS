// 



const user = {
    email: "user@gmail.com",
    name: {
        first_name: "User",
        last_name: "Kumar"
    }
}

console.log(user);
console.log(user.name.first_name);


// -------------combining two objects---------------
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1 , obj2}

// using Object.assign()
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// Using spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4);


// ======= Array of objects ============
const users = [
    {
        id: 1,
        name: "hfsfd"
    },
    {
        id: 2,
        name: "hfsfd"
    },
    {
        id: 3,
        name: "hfsfd"
    },
]

console.log(users);
console.log(users[1].id);


// ---- getting all keys and values of an object ---------
console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.entries(user)); // key and value paired in an array

console.log(user.hasOwnProperty("email"));


// ============ Object Destructuring ===========
const course = {
    cousrsename: "React",
    price: "free",
    tutor: "Johny"
}

const {cousrsename, price:cost, tutor} = course
console.log(cousrsename);
console.log(cost);
console.log(tutor);

const insann = {
    name: "insaan ka naam",
    occupation: "insaan ka kaam"
}
const {occupation} = insann
console.log(occupation);