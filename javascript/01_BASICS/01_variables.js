const accountId = 14453
let accountEmail = "kunj@gmail.com"
var accountPassword = "123456789"
let accountCity = "Ahmedabad"
let accountState;

// accountId = 2 // not allowed
accountEmail = "ks@ks.com"
accountPassword = "1234567890"
accountCity = "Rajkot"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId) 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])