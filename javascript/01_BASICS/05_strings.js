const name= "Kunj";
const repoCount = 50;

// console.log("Hello " + name + ", you have " + repoCount + " repositories.");

console.log(`Hello ${name}, you have ${repoCount} repositories.`);
  
const gameName = new String('kunj');
console.log(gameName[0]);
console.log(gameName.__proto__); // String.prototype



console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // KUNJ
console.log(gameName.toLowerCase()); // kunj
console.log(gameName.charAt(0)); // k
console.log(gameName.indexOf('u')); // 1
console.log(gameName.lastIndexOf('u')); // 2
console.log(gameName.includes('un')); // true
console.log(gameName.startsWith('k')); // true
console.log(gameName.endsWith('j')); // true
console.log(gameName.repeat(3)); // kunjkunjkunj
console.log(gameName.slice(1, 3)); // un
console.log(gameName.split('')); // [ 'k', 'u', 'n', 'j' ]
console.log(gameName.split('n')); // [ 'ku', 'j' ]
console.log(gameName.trim()); // 'kunj' (no spaces to trim)
console.log(gameName.replace('k', 'K')); // Kunj


const newString = gameName.substring(1, 3); // un
console.log(newString); // un

const anotherString = gameName.slice(-8, 4); 
console.log(anotherString); 


