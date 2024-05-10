// 


class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password+"fhsfu"
    }

    set password(value){
        this._password = value
    }
}

const tushar = new User("tushar@gmail.com", "password")
console.log(tushar.password);