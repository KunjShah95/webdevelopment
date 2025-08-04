//singleton 
// objects are singletons in javascript
// this means that there is only one instance of an object in memory

//object literals
const mySym= Symbol("key1");
const JsUser = {
  name: "Kunj",
  "full name": "Kunj Patel", // property with space in name
  [mySym]:"mykey1",
  age: 20,
  city: "Ahmedabad",
  email:"kunj@gmail.com",
    loggedIn: true,
    lastloginDays: ["Monday", "Tuesday", "Wednesday"],


};

console.log(JsUser.email); 
console.log(JsUser["email"]); // accessing property using bracket notation
console.log(JsUser["full name"]); // accessing property with space in name
console.log(JsUser[mySym]); // accessing property with symbol key using bracket notation

JsUser.email = "kunj@google.com"; // changing the value of the property
Object.freeze(JsUser); // freezing the object to prevent further changes
JsUser.email = "kunj@yahoo.com"; // this will not change the value of the property
console.log(JsUser); // still "kunj@google.com"


