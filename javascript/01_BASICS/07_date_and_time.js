//DATES

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // "Mon Oct 16 2023"
// console.log(myDate.toLocaleString()); // "10/16/2023, 12:00:00 AM" (format may vary based on locale)
// console.log(typeof myDate); // "object"
// console.log(myDate.getFullYear()); // 2023

// let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date("2025-01-05")
console.log(myCreatedDate.toDateString()); // "Mon Oct 16 2023"

let myTimestamp =Date.now(); // Get timestamp in milliseconds
console.log(myTimestamp); 
console.log(myCreatedDate.getTime()); // Get timestamp in milliseconds for myCreatedDate
console.log(myCreatedDate.getTime() - myDate.getTime()); // Difference in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds


let newDate = new Date()
console.log(newDate.getFullYear()); // Current year
console.log(newDate.getMonth() + 1); // Current month (0-11, so +1 for 1-12)
console.log(newDate.getDate()); // Current day of the month (1-31)
console.log(newDate.getHours()); // Current hour (0-23)