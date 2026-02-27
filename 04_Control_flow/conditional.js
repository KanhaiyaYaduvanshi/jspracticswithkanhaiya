/* if 
if (true) {
    
}// execute
if (false) {

}//not execute
const isUserLoggedIn = true
if(isUserLoggedIn) {
   console.log("executed");
   
}*/

/*conditional operators
<, > , <=, >= , == , != , === , !==*/
/*if else
const temp = 33
if (temp < 50) {
    console.log("weather is average");
    
} else {
    console.log("be aware from loo temprature is very high outside");
}
*/
/*block scope
const score = 200 
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
    
}
     console.log(`User power: ${power}`);//throe error power not defined
 */
   
/*short hand notation
const balance = 1000
if (balance > 500 ) console.log("test");*/

/* nested 
const balance1 = 700

if(balance1<500) {
    console.log(`very low balance ${balance1}`);
} else if(balance1 <= 750) {
    console.log(`enough balance ${balance1}`);
} else {
    console.log(`your balance: ${balance1}`);
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGmail = false
//logical operator
//and operator
if (userLoggedIn && debitCard) {
    //console.log("Allow to buy course");
    
}
// or operator
if (loggedInFromGoogle || loggedInFromGmail) {
    //console.log("User Logged In");
    
}
// Nullish Coalescing Operator (??): to check null,undefined

let val1;
//val1 = 5 ?? 10    //5
//val1 = null ?? 10    //10
//val1 = undefined ?? 15   //15
//val1 = null ?? 10 ?? 15  //10


//console.log(val1);

//terniary operator
//condition ? true :false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
;

