// 


const userId = 10
let userEmail = "email@gmail.com"
var userPassword = "54321"  // using var is not recommended because of scope issues.
userCity = "Bikaner"
let userState;


// userId = 20   --> TypeError: Assignment to constant variable.

userEmail = "email@google.com"
userPassword = "12345"
userCity = "Gurgaon"

console.log(userId);

console.table([userId, userEmail, userPassword, userCity, userState])