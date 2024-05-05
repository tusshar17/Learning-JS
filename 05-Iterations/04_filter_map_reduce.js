// filter()

const nums = [1, 2, 3, 4, 5]

const newNums = nums.filter((num)=>num>2)

console.log(newNums);




// map()

const nums2 = [1, 2, 3, 4, 5]

const newNums2 = nums2.map((item)=>item+10)

console.log(newNums2);




// reduce()

const nums3 = [1, 2, 3, 4, 5]

const total = nums3.reduce((acc, curr)=>{
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)

console.log(total);