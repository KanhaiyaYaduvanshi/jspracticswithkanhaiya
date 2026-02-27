//const userEmail = []
const emptyObj = {}
const userEmail = emptyObj

if (userEmail) {
    console.log("Got user Email: ",userEmail);
} else {
    console.log("Don't have user email");
    
}

//falsy values
/* false, 0 ,-0 , BigInt 0n, "", null , undefined, NaN*/
//except these all are truthy
// truthy values
/* "0", 'false' ," ",[] , {} , function(){},*/

if (userEmail.length === 0){
    console.log("Array is empty");
    
}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}