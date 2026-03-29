// for of loop

/*const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
}
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}*/

// Maps
//unique and ordered values

const map = new Map()
map.set('IN',"INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
    
}

const myObj = {
    game1: 'free fire',
    game2: 'BGMI',
    game3: 'WAR'
}
for (const [key,value] of myObj) {
    console.log(key , "=" , value);
    
}