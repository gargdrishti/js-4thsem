const accountId = 14453
let accountEmail = "drih@google.com"
var accPass = "122"
accountCity = "Jaipur"
let accountState;

// accountId =2 //not allowed
accountEmail = "hc@hc.com"
accountPass ="233"
accountCity = "bathinda"
console.log(accountId);

/* prefer not to use var
because of issue in block and functional scope */

console.table([accountId,accountEmail,accountPass,accountCity,accountState])