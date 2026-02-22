//function

function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("Y");
    console.log("A");
}
//sayMyName()
// function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
//   let result = num1 + num2
//   return result
return num1 + num2
}
const result = addTwoNumbers(304, 609)

//console.log("Result of addTwoNumbers: ", result);

function loginUserMessege(username = "kan") {
    if(username === undefined || !username) {
    console.log("Please enter a username");
    return
    
    }
    return `${username} just logged in`
}

//console.log(loginUserMessege("Kanhaiya"))

function calculateCartPrice(val1, val2 ,...num1) {
    return num1
}
//console.log(calculateCartPrice(200, 400 ,500,2000));
const user = {
    username: "Kanhaiya",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
