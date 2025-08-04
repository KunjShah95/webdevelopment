//javascript array-copy operation create shallow copy
// shallow copy means that the new array will reference the same objects as the original array
// if the original array contains objects, changes to those objects will be reflected in the copied array
// deep copy means that the new array will create new objects, so changes to the original objects will not affect the copied array

const myArr=[1, 2, 3, 4, 5];
const heros = ['Shaktiman','nagarjag']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]); // [1, 2, 3, 4]


// array methods

myArr.push(6); // adds 6 to the end of the array
console.log(myArr); // [1, 2, 3, 4, 5, 6]
console.log(myArr.length); // 6 
myArr.pop(); // removes the last element from the array
console.log(myArr); // [1, 2, 3, 4, 5]
myArr.unshift(0); // adds 0 to the beginning of the array
console.log(myArr); // [0, 1, 2, 3, 4, 5]
myArr.shift(); // removes the first element from the array
console.log(myArr); // [1, 2, 3, 4, 5]

myArr.splice(2, 1); // removes the element at index 2
console.log(myArr); // [1, 2, 4, 5]

myArr.splice(2, 0, 3); // adds 3 at index 2
console.log(myArr); // [1, 2, 3, 4, 5]

const slicedArr = myArr.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(slicedArr); // [2, 3]

const joinedArr = myArr.join(', '); // joins the array elements into a string
console.log(joinedArr); // "1, 2, 3, 4, 5"

const reversedArr = myArr.reverse(); // reverses the array
console.log(reversedArr); // [5, 4, 3, 2, 1]

const sortedArr = myArr.sort(); // sorts the array
console.log(sortedArr); // [1, 2, 3, 4, 5]

// Copying arrays
const shallowCopy = myArr.slice(); // creates a shallow copy of the array
console.log(shallowCopy); // [1, 2, 3, 4, 5]
const spreadCopy = [...myArr]; // creates a shallow copy using the spread operator
console.log(spreadCopy); // [1, 2, 3, 4, 5]
const arrayFromCopy = Array.from(myArr); // creates a shallow copy using Array.from
console.log(arrayFromCopy); // [1, 2, 3, 4, 5]

// Deep copy example using JSON methods
const deepCopy = JSON.parse(JSON.stringify(myArr)); // creates a deep copy of the array 
console.log(deepCopy); // [1, 2, 3, 4, 5]
// Note: JSON methods only work with JSON-serializable data (no functions, undefined, or circular references)
// Example of shallow copy with objects
const originalObj = { name: 'John', age: 30 };
const shallowObjCopy = { ...originalObj }; // creates a shallow copy of the object
console.log(shallowObjCopy); // { name: 'John', age: 30 }
shallowObjCopy.age = 31; // modifying the copied object does not affect the original
console.log(originalObj); // { name: 'John', age: 30 } // original remains unchanged
console.log(shallowObjCopy); // { name: 'John', age: 31 } // copied object is modified

