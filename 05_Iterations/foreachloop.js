// for each loop

const coding = ["js","python","cpp","ruby","java"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// } )
//with arrow function
// 
// coding.forEach(  (item) => {
//        console.log(item);
        
// })
// function printMe(item) {
//         console.log(item);
        
// }
// coding.forEach(printMe)

// coding.forEach( (item , index, arr) => {
//     console.log(item ,index,arr);
    
// })

const myCoding = [
        {
                languageName:"javascript",
                fileName:"js"
        },
        {
                languageName:"python",
                fileName:"py"
        },
        {
                languageName:"C++",
                fileName:"cpp"
        }
]
myCoding.forEach( (item) => {
        console.log(item.languageName);
        
})