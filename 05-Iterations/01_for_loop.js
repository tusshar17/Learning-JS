// 

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

// console.log(i);  --> out of scope



let arr = ["audi", "bmw", "volvo"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}


// break and continue

for (let index = 0; index < 10; index++) {
    
    if (index==5){
        console.log("skipping 5");
        continue
    }
    if (index==8) {
        console.log("breaking loop");
        break
    }

    console.log(index);
}