// singleton

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "full name" : "hitesh garg",
    [mySym]:"mykey1",
    age : 19,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("hello js user");
}
JsUser.greetingTwo = function() {
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());