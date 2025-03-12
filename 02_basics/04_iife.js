// Immediately Invoked Function Expressions(IIFE)

// (function chai() {
//     console.log(`DB CONNECTED`);
// })()


// ()()

// first () => function defination
// second () => function execution

(function chai() {
    console.log(`DB CONNECTED`);
})();

(function aurcode() {
    console.log(`DB CONNECTED two`);
})();


((name) => {
    console.log(`DB CONNECTED two ${name}`);
})('hitesh')
