//function

// NOTE: If you dont return anything from function, then bydafault it returns"UNEFINED"

//NOTE : code written after RETURN in function body dont get executed
// so, write return at the end.

// purpose to create a login function
// function login(name, password) {

//     //function body
//     console.log(`${name}, Logged in successfully`);
//     console.log(password);

// }
// login("Ajay", "secret"); //functional calling => this will execute the code inside
// login("Thakur");

// function upperCase(str) {
//     // console.log(str.toUpperCase())
//     // In place of print you can RETURN the result so that result can be used in other ways too.
//     return str.toUpperCase();
// }
// const result = upperCase('javacript');
// console.log(result);

// function calculatArea(width, height) {

//     //default parameters

//     height = height === undefined ? 1 : height;
//     const area = width * height;
//     return area;
// }

// //NOTE : if you have declared two parameters,
// // but during call the function if you pas one argument,
// // then it will return undefined;

// console.log(calculatArea(2, 6));

//VARIABLE SCOPE

// function download() {
//     // download logic

//     const fileName = "xyz.pdf";
//     console.log(fileName);
// }
// download();;

// FUNCTION EXPRESSION AND FUNCTION DECLERATION

//declaration
// function login() {

// }


//expression
// const login = function() { // annonymous function
//     console.log("Logged in ");
// }
// login();

// // CallBack function

// function formatText(text, formatcb) {
//     return typeof formatcb === 'function' ? formatcb(text) : text.toUpperCase();
// }

// const result = formatText("javascript", function(text) {

//     // here only first charector of text being capitalized
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

// IIFE = (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// This function calls itself automaticaly, no need to call

// (function setup() {
//     console.log("Setup Done!");
// })();


//ARROW FUNCTION

// normal function
// const login = function () {
//     console.log('Loged In ');
// }
// login();

//Arrow function
// const login = () => console.log('Logged in ');
// login();

// const sum = function(num1, num2){
//     return num1 + num2;
// }
// const result = sum(24, 42);
// console.log(result);

//arrow function

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(23, 32));

// Good Practices

//1.  Naming : function name should be as work name Ex. getSum,
// 2. function action shoud support their name
// 3. function name should be Descriptive
// not like a, b etc