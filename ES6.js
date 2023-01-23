// ES6

// let const

// var productName = 'laptop';

// var creates code polution

// var age = 18;
// if (age >= 18) {
//     var driving = true;
// }
// console.log(driving); // true

// var age = 18;
// if (age >= 18) {
//     let driving = true;
// }
// console.log(driving); // error: driving is not defined

// By using let and const we can eleminate the code polution problem.
// as in above example afer declaring driving variable with let it
// does not alow to acces outside.

// reason behind is:
// Let and const has block scope where as var has function scope

// function register() {
//     var username = 'rakesh';
//     var password = 'secret';

// }
// console.log(username); // error: username not defined


// var product = 'laptop';
// var product = ' mobile';

// console.log(product); // mobile
// here problem is due to var varable just gets over write
// which is not acceptable and cretes problem
// this over write problem is solved by using let, which prevents over write of varales


// HOITING is pssible using var which prevent let or const


//ARROW FUNCTION

// NORMAL FUNCTION CREATION
// function greet() {
//     console.log('Good Morning');
// };
// greet();

//arrow function
// const greet = () => {
//     console.log('good morning')
// };
// greet();

// const addition = (a, b) => {
//     console.log(a + b)
// }
// addition(2, 5);

// const addition = (a, b) => console.log(a + b);
// addition(2, 5);

// arrow function does not have its oun context or this
// basically this means context means of function

// console.log(this) // corresponds to global object "window"

// const shop = { // Object
//     purchase() { //  Method under object
//         console.log(this);
//     },
// };
// shop.purchase() // this belongs to purchase or shop ibject

// const shop = { // Object
//     purchase: () => { //  Method under object
//         console.log(this);
//     },
// };
// shop.purchase(); // this belongs to window object

// reason here is arrow function does not has its oun context so it
// it takes its parents context, here parent is "window"

// practical example using button

// const myButton = document.querySelector('#btn');

// const shop = { // Object
//     price: 100,
//     buy: function() { //  Method under object
//         // const self = this;
//         myButton.addEventListener('click', function() {
//             console.log(this); // output =  <button id="btn"> Click Me!</button>
//             // console.log('I spent ' + this.price);
//         })

//     },
// }
// shop.buy(); // output : I spent undefined;

// Here problem is this inside " console.log('I spent ' + this.price)"
// doesnot points to objects this. To get rid of this problem either
// you use " console.log('I spent ' + _this.price)" or "const self = this; and  console.log('I spent ' + self.price) as used in above code"

// you can simply get out this problem by using arrow function in place of normal function used

// const myButton = document.querySelector('#btn');

// const shop = { // Object
//     price: 100,
//     buy: function() { //  Method under object
//         myButton.addEventListener('click', () => {
//             console.log(this); // points to shop object context
//             // console.log('I spent ' + this.price);
//         })

//     },
// }
// shop.buy();

// // output: I spent 100. ( As expected)


// ###      TEMPLATE LITERALS AKA BACKTICS

// const firstName = ' ajay';
// const lastName = ' Thakur';

// console.log(firstName + ' ' + lastName); // ajay Thakur

// // using backtics
// console.log(`${firstName} ${lastName}`) //ajay Thakur

// Previously if you wanted to type like

/*
   Hello,
   how are you?     
*/
// const message = 'hello \n' + 'how are you';

// this problem simply can be solved by using template literal

// const message = `Hello,

// How are you?`

// console.log(message)

// ############  ENHANCED OBJECT LITERALS #############

//Enhancements

// 1. Computed properies keys
// 2. Method Definition sort hand
// 3. Property sort hand


// const accesToken = 'gkjbkalfbsmb';
// const refreshToken = 'adktjkjjtweiuo';
// const user = {
//     // accesToken: accesToken,
//     // refreshToken: refreshToken,
//     // In Above two line of code there  is redundent code with same name;
//     // You can use property sorthand instead, like below

//     accesToken,
//     refreshToken,

// }
// console.log(user);

// const keyName = 'name';
// const product = {
//     [keyName]: 'Moile', // Computed value
//     price: 100,


//     // OLD method
//     // buy: function () {
//     //     constructor(props) {
//     //         console.log('Bought')
//     //     }
//     // }

//     // New enhancement
//     buy() {
//         console.log("Bought")
//     }
// };
// console.log(product);


// DESTRUCTURING

// const user = {
//         name: 'ajay Thakur',
//         age: 25
//     }
//     // console.log(user);
//     // console.log(user.name);

// // Problem: If you want to access a particular property suppose " name" you
// // have to write like, console.log(user.name) and so on.
// // To help in such problem DESTRUCTURING can be helpful

// // const { name, age } = user; // DESTRUCTURING
// // console.log(name); // access name property of user object and so on

// // We can use aliyas i.e. another name for the same varable;

// const { name: fullName, age } = user;
// console.log(fullName)

//ARRAY DESTRUCTURING

// old way
// const data = ['ajay thakur', 25, 'Engineer'];
// console.log(data[0]);// ajay thakur
// console.log(data[1]);// 25
// console.log(data[2]);// Engineer

// // using destructuring
// const data = ['ajay thakur', 25, 'Engineer'];
// const [name, age, profession] = data;

// console.log(profession);


// ########### DEFAULT PARAMETERS ##############

// const register = (name, password, image) => {
//     console.log(name, password, image);
// }
// register('Ajay', 'secret') // Ajay secret undefind

// // after using default parameters
// const register = (name, password, image = "test.png") => {
//     console.log(name, password, image);
// }
// register('Ajay', 'secret') // Ajay secret test.png
// register('Ajay', 'secret', 'photo.png') // Ajay secret photo.png


// ############## SPREAD OPERATOR (THREE DOTS ...) #######

// If you have to clone any object or array, then you can use spread operator

// const languages = ['C', "c++", "javaScript"];
// console.log(languages);
// // task is, we have to copy above array in new array
// // it can be done easily by using spread operator

// // const newlanguages = [...languages];

// // if we want new element " typeScript" in array at begining
// // we can do like below
// const newlanguages = ['typeScript', ...languages]
// console.log(newlanguages);

// object destructuring

// const settings = {
//     volume: 10,
//     brightness: 80,
// };

// // we have to copy above objet

// for (const entries of Object.entries(settings)) {
//     console.log(entries);
// }
// // OUTPUT : It will return seperate two array of key-value pairs

// for (const [key, value] of Object.entries(settings)) {
//     console.log(key, value);
// }

//PROMISES

// function login(callback) {
//     setTimeout(() => {
//         console.log('Login...')
//         callback();
//     },0)
// }
// login(() => {
//     console.log('redirecting');
// });

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login..')
//             resolve();
//         }, 0)
//     })

// }
// login().then(() => {
//     console.log('Redirecting...')
// }).catch(err => {
//     console.log('Error....');
// });

// FIND METHOD

// const users = [{ name: 'Ajay' }, { name: 'Mohan' }];

// const user = users.find((user) => {
//     return user.name === 'Ajay'
// });
// console.log(user);

//FIND iNDEX

// const users = [{ name: 'Ajay' }, { name: 'Mohan' }];

// const user = users.findIndex((user) => {
//     return user.name === 'Ajay'
// });
// console.log(user); // 0

// if something is not inside your array, and you try to find that
// in that case it will return -1

//SET

// set is an object inside javascript like array which contain unique items.

// const uniqueNumbers = new Set();


// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(3);
// uniqueNumbers.add(6);
// console.log(uniqueNumbers);
// console.log(uniqueNumbers.size); // to find the size of array
// console.log(uniqueNumbers.has(5)); //true
// console.log(uniqueNumbers.has(4)); //false

// const numbers = [4, 5, 6, 4, 7, 6];
// // if you want to filter duplicate numbers then
// const uniqueNumbers = new Set(numbers)

// console.log(uniqueNumbers);
// console.log(Array.from(uniqueNumbers));// this will return output in array form


//###### MAP ( hastables) ############

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');

// console.log(urls);
// console.log(urls.get('production')); // to get an elements

// You ought to use Map(), if you have to create lookup table in your applicaton

// const urlsObj = {
//     development: "dev.example.com",
//     production: "prod.example.com",
// }
// console.log(urlsObj.development);
// problem here is, it is not guaranteed that you will gwt data in same order
// as you have entered.

// for (const url of urls) {
//     console.log(url);
// }

// Destructuring can also be done here like below
// for (const [key, value] of urls) {
//     console.log([key, value]);
// }

//CLASSES

// // WE USED TO USE constructr function to create object like functionalities
// // like below

// function Person(Name) {
//     this.Name = Name;

// }
// // we can create different object with thw help of this Constructor function
// const Ajay = new Person('Ajay Thakur');
// // another Object
// const Thakur = new Person('Ajay Thakur');
// // to Change the property
// Ajay.Name = 'Ram'

// console.log(Ajay)

// Newly introduced class

// class Person {
//     name;
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log('Good Morning')
//     }

// }

// // Using Inheritance
// class GreetPerson extends Person {
//     attitude = 'cool';
// }


// const Ajay = new GreetPerson("Ajay Thkur");
// console.log(Ajay)
// const Mohan = new Person("Mohan Thkur");
// console.log(Mohan)
// console.log(Mohan.greet)
// console.log(Ajay.greet)


// ES6 MODULES

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }


// function printName(user) {
//     console.log(`User's name is ${user.name}`)
// }
// printName("ajay");


// function printAge(user) {
//     console.log(`User is ${user.age} years old.`)
// }

// /* 
//  There is default export and standard export  
// */

// export default User;
// export {printName, }