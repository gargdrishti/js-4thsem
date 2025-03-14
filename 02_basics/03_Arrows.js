const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//this is used to refer current context


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// } 

//implicit return
const addTwo = (num1, num2) => num1 + num2; // No return keyword or curly braces needed
console.log(addTwo(2, 3)); // This will output 5