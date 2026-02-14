const name = "kanhaiya"
const repoCount = 15

//console.log(name + repoCount + "Value");
console.log(`Radhe Radhe my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String("kanhaiya-king")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);

const newStringOne = "   kanhaiya    "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://kanhaiya.com/kanhaiya%20"
console.log(url.replace('%20','-'))