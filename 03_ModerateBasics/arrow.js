const user = {
    username: "kanhaiya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to website`);
        //console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Gurudev"
// user.welcomeMessage()
//console.log(this);

// function chai() {
//     let username = "kanhaiya"
//     console.log(this.username);//undefined this keyword not useful in function
    
// }
//chai()
// const chai= function() {
//     let username = "kanhaiya"
//     console.log(this.username);//undefined this keyword not useful in function
    
// }
//chai()
const chai = () => {
    let username = "kanhaiya"
    console.log(this);//{}
    
}
//chai()
//basic arrow function//explicit return
// const addtwo = (n1, n2) => {
//     return n1 + n2
// }
//console.log(addtwo(3,4));//7


//implicit return
//const addto = (n1,n2) => (n1 +n2)
const addto = (n1,n2) => ({username: "kanhaiya"})//{ username: 'kanhaiya' }


console.log(addto(3 , 4))//7