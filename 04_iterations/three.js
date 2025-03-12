// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr){
    console.log(i);
}

const greetings = "hello world!"
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}


// Maps
//maps are iteratable
const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
// console.log(map);

// for(const [key,value] of map){
//     console.log(key,':-',value);
// }

// //objects are not iteratable
// // const myObject = {
// //     'game1':'NFS',
// //     'game2':'spiderman'
// // }
// // for(const [key,value] of myObject){
// //     console.log(key,':-',value);
// // }
// .....