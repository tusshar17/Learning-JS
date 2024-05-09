// 


const promiseOne = new Promise( (resolve, reject) => {
    // do some work
    setTimeout(()=>{
        console.log("Async task")
        resolve()
    }, 1000)
} )

promiseOne.then(()=>console.log("Promise consumed"))


// no need to store promise in any variable
new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(()=>console.log("promise consumed 2"))


//
const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const user = {
            username: "tushar",
            email: "email@gmail.com"
        }
        resolve(user)
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})


//
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({msg: "success"})
        }
        else{
            reject({msg: "error"})
        }
    }, 1000);
})

promiseFour.then((data)=>{
    console.log(data);
    return data.msg
}).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})


// 

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({msg: "task successful"})
        }
        else{
            reject({msg: "task failed"})
        }
    }, 1000);
})


const consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response.msg);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// 

// const getData = async () => {
//     try{
//         const response = await fetch("https://api.github.com/users/tusshar17")
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getData()

fetch("https://api.github.com/users/tusshar17")
.then((response)=>{
    console.log("Response status:", response.status);
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

