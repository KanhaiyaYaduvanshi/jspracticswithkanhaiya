const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },5)
const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "testbook pass",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 3999
    },
    {
        itemName: "DSA course",
        price: 5999
    }
]
 const myBill = shoppingCart.reduce( (acc,item) => acc + item.price,0 )
console.log(myBill);

