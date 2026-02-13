// premitive datatypes - call by value
//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

//JS is dynamically typed language datatypes defined at runtime
const score = 100
const scoreValue = 100.3
const userName = "Kanhaiya"
const Id = Symbol("123")
const anotherId = Symbol("123")


const isLoggedIn = false
const outsideTemp = null
let userEmail;//email undefined
console.log(Id);
console.log(anotherId);
console.log(Id === anotherId);//output false
const bigNumber = 34656464766784646n //BigInt





//Non premitive Datatypes - call by Reference
//Array,Objects,Functions

const heros = ["shaktiman", "Hanuman", "naagraj"]
let myObj = {
    name: "kanhaiya",
    age: 21,
}


const myfunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);//bigInt
console.log(typeof scoreValue);//number
console.log(typeof outsideTemp);//object
console.log(typeof isLoggedIn);//boolean
console.log(typeof Id);//symbol
console.log(typeof userName);//string
console.log(typeof userEmail);//undefined
console.log(typeof heros);//object(array)
console.log(typeof myObj);//onject
console.log(typeof myfunction);//function


