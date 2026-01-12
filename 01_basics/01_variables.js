const accountId = 14457;
let accountEmail = "sameer@google.com";
var accountPass = "12345";
accountCity = "Durgapur"; //It's not a good practice


//accountId = 2 //constant variables are not allowed to change

accountEmail = "sam@Gmail.com";
accountPass = "242628";
accountCity = "Kolkata";

console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity]);
