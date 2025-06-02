//primitive

// 7 primitive data types:String,Number,null(empty),Boolean,undefined,Symbol,BigInt

// 1. String
let str = "Hello, World!";
console.log(typeof str); // "string"
// 2. Number
let num = 42;   
console.log(typeof num); // "number"
// 3. Null
let empty = null;
console.log(typeof empty); // "object"
// 4. Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"
// 5. Undefined 
let notDefined;
console.log(typeof notDefined); // "undefined"
// 6. Symbol    
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
// 7. BigInt
let bigIntNum = BigInt(123456789012345678901234567890);
console.log(typeof bigIntNum); // "bigint"

// Non-primitive(Reference) data types: Object, Array, Function
// 1. Object
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // "object"
// 2. Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object"
// 3. Function
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // "function"


// javascript is dynamically typed language
// You can change the type of a variable at runtime

// -------------------------------------------------------------

// Stack, heap memory
// Stack: stores primitive data types and references to objects
// Heap: stores objects and functions(non-primitive data types)

// Stack is faster than heap memory
// Stack memory is used for static memory allocation and function calls
// Heap memory is used for dynamic memory allocation
// Stack memory is limited, while heap memory is larger but slower



let myNane = "Kunj"
let anothername = myNane;
anothername="Shah"

console.log(myNane); // "Kunj"
console.log(anothername); // "Shah"


let user={
    email: "user@gmail.com",
    upi:"user@sbi",
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
}

let anotherUser = user;
anotherUser.email = "abc@gmail.com"

console.log(user.email); 
console.log(anotherUser.email); 