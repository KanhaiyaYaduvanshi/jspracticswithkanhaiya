//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Hanuman","Krishna","Shiva"]
const myArr2 = new Array(1,2,3,4,5,6,7,8)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//myArr.unshift(9)//add at first position thast why we need to shift all element and it make time complexity high
//myArr.shift() //shift one element output [1,2,3,4,5]


//console.log(myArr.includes(9));//false
//console.log(myArr.indexOf(9));//-1
//console.log(myArr.indexOf(3));//3

// const newArray = myArr.join()


// console.log(typeof myArr);//[0,1,2,3,4,5]//object
// console.log(typeof newArray);//0,1,2,3,4,5 //string

//slice(does not manipulate original array),splice(manipulate original array)
console.log("A ",myArr);
const myn1 = myArr.slice(1, 3)//[1,2]
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)//[1,2,3]
console.log("C ",myArr);//[0,4,5]

console.log(myn2);







