// singleton(object from constructor)
//Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kanhaiya",
    "full name": "Kanhaiya Kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Madhubani",
    email: "kanhaiya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);//kanhaiya@google.com
// console.log(JsUser["email"]);//kanhaiya@google.com
// console.log(JsUser["full name"]);//Kanhaiya Kumar
// console.log(JsUser[mySym]);//mykey1

// JsUser.isLoggedIn = true
// console.log(JsUser["isLoggedIn"]);//true
//Object.freeze(JsUser)

//JsUser.email = "kanhaiya@yahoo.com"//cannot change because we freeze the obj
//console.log(JsUser);
//output
//{
//   name: 'Kanhaiya',
//   'full name': 'Kanhaiya Kumar',
//   age: 20,
//   location: 'Madhubani',
//   email: 'kanhaiya@google.com',
//   isLoggedIn: true,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

JsUser.greeting = function(){
    console.log("Radhe Radhe JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Radhe Radhe JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

