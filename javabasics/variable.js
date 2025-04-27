const accountId = 1344444
let accountEmail = "lakhvinder9567@gmail.com"
var accountPassword = "12345678"
accountCity = "Ambala"
let accountState;

// accountId = 3 not allowed

accountEmail = "lsfj@h.com"
accountPassword = "42433"
accountCity = "zirakpur"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

