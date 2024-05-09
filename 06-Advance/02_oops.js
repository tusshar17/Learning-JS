// 

const user = {
    username: "tushar",
    logInCount: 10,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log(this.username);
        console.log(this);
    }
}


console.log(user);
user.getUserDetails()


// constructor function

function User(username, logInCount, isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome, ${this.username}`);
    }

    return this
}

// const user1 = User("user1", 10, true)
// const user2 = User("user2", 10, true)
// console.log(user1);

const user1 = new User("user1", 23, true)
const user2 = new User("user2", 2, false)
console.log(user1);
console.log(user2);
user2.greeting()

console.log(user1.constructor);