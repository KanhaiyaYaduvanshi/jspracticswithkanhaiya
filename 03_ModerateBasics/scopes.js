//scopes of function
const c = 300 //global scope variable

// if (true) {
//    let a = 10
//    const b = 20
//    const c = 30//block scope variable
//    //console.log("INNER: ",c);//INNER: 30
   
// }
// console.log(a);
// console.log(b);
//console.log(c);//300

function one() {
   const username = "kanhaiya"

   function two() {
      const website = "youtube"
      console.log(username);
      
   }
   //console.log(website);

   //two()
   
}

//one()

if (true) {
   const username = "kanhaiya"
   if (username === "kanhaiya") {
      const website = " youtube"
      //console.log(username + website);
      
   }
   //console.log(website);
   
}
//console.log(username);


//****************** interesting ***************** */
console.log(addone(5)) // it does not throw any error
function addone(val) {
   return val + 1
}

console.log(addtwo(5))//error( cannot acess before intialization
const addtwo = function(val) {
   return val + 2
}
