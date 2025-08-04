const marvel_heros=['Iron Man','Spider Man','Thor','Hulk']
const dc_heros=['Batman','Superman','Wonder Woman','Aquaman','Flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros) // this will not change the original array, it will return a new array
// console.log(all_heros) // this will return a new array with all the heroes


const all_heros = [...marvel_heros, ...dc_heros]; // using spread operator to combine arrays
// console.log(all_heros); // this will return a new array with all the heroes

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];


const real_another_array= another_array.flat(Infinity); // flattening the array to a depth of 2
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("kunj")); 
// returns false, because "kunj" is not an array
console.log(Array.from("kunj")); 
console.log(Array.from({name:"kunj"}));
// returns an array with the keys of the object, which is ["name"]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));