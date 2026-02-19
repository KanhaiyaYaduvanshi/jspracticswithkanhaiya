const Marvel_heros = ["ironman","hulk","spiderman","thor"]
const dc_heros = ["superman","flash","batman"]

// Marvel_heros.push(dc_heros)
// console.log(Marvel_heros[3])

// const all_heros = Marvel_heros.concat(dc_heros)
//  console.log(all_heros);

// const all_new_heros = [...Marvel_heros,...dc_heros]//spread
// console.log(all_new_heros);
const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);


console.log(Array.isArray("Kanhaiya"))
console.log(Array.from("Kanhaiya"))
console.log(Array.from({name: "Kanhaiya"}))//gives [] intersting concept

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


