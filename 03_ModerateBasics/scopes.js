//scopes of function
const c = 300 //global scope variable

if (true) {
   let a = 10
   const b = 20
   const c = 30//block scope variable
   console.log("INNER: ",c);//INNER: 30
   
}
// console.log(a);
// console.log(b);
console.log(c);//300

