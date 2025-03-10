//funct defination
function sayMyName() {
    console.log("D");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("T");
    console.log("I");
}

// sayMyName()



// function addTwoNumbers(number1,number2) {
//      console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2) {
    // let result=number1 + number2
    // return result
    //or directly return as shown below
    return number1 + number2
    console.log("hotesh") //this will not execute as after return nothing will be printed
}
const result = addTwoNumbers(3,4)
console.log(result);



function loginUserMessage(username) {
    if(username === undefined){
        console.log("pls enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("hotesh"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage()) //when no value is passed


function calculateCartPrice(val1,val2,...num1) {
     return num1
}
console.log(calculateCartPrice(200,400,500));


const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})



const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500]))