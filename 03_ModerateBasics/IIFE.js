// Immediately Invoked Function Expressions (IIFE)
// global scope se hue pollution ko hatane ke liye IIFE ka use karte hai

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();//semicolon ka jarurat hota hai taki function ko pta chale kaha tak execute karna hai normal me nhi lagate

// with arrow fun,simple IIFE
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
}) ('kanhaiya');