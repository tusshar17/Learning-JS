// ES6



class User {
    constructor(username, email, password){
        this.email = email
        this.username = username
        this.password = password
    }

    saltPassword(){
        return `${this.password}cxys`
    }
}

const user1 = new User("user1", "user@gmail.com", "password")

console.log(user1.saltPassword());



// Inheritance

class Teacher extends User{
    constructor(username, email, password, subject){
        super(username, email, password)
        this.subject = subject
    }

    teach(){
        console.log(`${this.username} is teaching ${this.subject}`);
    }
}

const teacher1 = new Teacher("teacher1", "teacher@gmail.com", "teach123", "Javascript")
console.log(teacher1);
teacher1.teach()
console.log(teacher1.saltPassword())


console.log(teacher1 instanceof User);
console.log(teacher1 instanceof Teacher);