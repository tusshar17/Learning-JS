// 

function multitplyBy5(num){
    return num * 5
}

multitplyBy5.power = 2

console.log(multitplyBy5(2));
console.log(multitplyBy5.power);
console.log(multitplyBy5.prototype);


// 

function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.username}'s score is ${this.score}`);
}

const player1 = new createUser("P1", 400)
const player2 = new createUser("P2", 200)

player1.printMe()
player2.printMe()


//

let msg = "hello world   "

console.log(msg.length);

String.prototype.trueLength = function(){
    return this.trim().length
}

console.log(msg.trueLength());



let product = {
    id: 12,
    price: 230,

    getPrice: function(){
        console.log(`Price of product ${this.id} is ${this.price} Rs.`);
    }
}


Object.prototype.tushar = function(){
    console.log("tushar is present in each object");
}

product.tushar()
msg.tushar()
