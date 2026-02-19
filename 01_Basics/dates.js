//Dates
// let myDate = new Date()
// console.log(myDate.toString());//Wed Feb 18 2026 18:00:47 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Wed Feb 18 2026
// console.log(myDate.toLocaleString());//18/2/2026, 6:00:47 pm
// console.log(myDate.toLocaleTimeString());//6:00:47 pm
// console.log(myDate.toLocaleDateString());//18/2/2026
// console.log(myDate.toJSON());//2026-02-18T12:30:47.042Z
// console.log(myDate.toISOString());//2026-02-18T12:30:47.042Z
// console.log(myDate.getTimezoneOffset());//-332
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2026, 1, 18 , 18, 8)
// console.log(myCreatedDate.toLocaleString());//18/2/2026, 6:08:00 pm

 let myCurrentDate = new Date("02-18-2026")
// console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now()
// 
// console.log(myTimeStamp);//1771419482299 in milli second
// console.log(myCurrentDate.getTime());//1771353000000 in milli ssecond
// console.log(Math.floor(Date.now()/1000));//1771419482 in second
let newDate = new Date()
console.log(newDate.getDate());//18
console.log(newDate.getHours());//18
console.log(newDate.getDay());//3
console.log(newDate.getMonth()+1);//2

newDate.toLocaleString('default', {
    weekday: "long"
})