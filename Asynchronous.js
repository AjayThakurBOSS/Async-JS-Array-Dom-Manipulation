// Asynchronous JavaScript

// Asynchronous js do not block execution of next code

//synchronous code

console.log('Hello');


//Asynchronous code

// setTimeout(() => {
//     console.log("I am from setTimeOut");
// }, 3000);

// Another way of using setTimeOut

// function greeting() {
//     console.log('I am from SetTineOut');
// }
// setTimeout(greeting, 3000, )

// //synchronous code
// console.log('JavaScript');

console.log('Start');

function waitforSevenSecond() {
    let ms = 7000 + new Date().getTime();
    while (new Date() < ms) {}
}

setTimeout(() => {
    console.log('I am from Timeout')
}, 2000);


waitforSevenSecond();
console.log('End');