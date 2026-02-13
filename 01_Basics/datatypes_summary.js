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

//****************Memory******************* */
//two types Stack & Heap
//Stack - uses In Primitive Datatypes
//changes is happend in copy not in original



//Heap - for Non-Premitive Datatypes
//changes happens in reference means in original data

let myYoutubename = "kalyug_ka_kavi_1"
let anotherName = "kanhaiya_yaduvanshi"
console.log(anotherName);//kanhaiya_yaduvanshi
console.log(myYoutubename);//kalyug_ka_kavi_1



let user = {
    email: "user@gmail.com",
    upi: "iahgyugh"
}
let user2 = user

user2.email = "kanhaiya@google.com"

console.log(user.email);//kanhaiya@google.com
console.log(user.email);//kanhaiya@google.com

