// Document Object Model (DOM)

//1. getElementById()

// const heading = document.getElementById('heading');
// console.log(heading);

// 2. getElementByTagName

// const heading = document.getElementsByTagName('h2');

//3. getElementsByclass()
// const heading = document.getElementsByClassName('heading');

//4. querySelector()

// const heading = document.querySelector('#heading');
// const heading = document.querySelector('.heading');

// 5. querySelectorAll()

// const heading = document.querySelectorAll(".heading")
// console.log(heading);

// TRAVERSE DOM
// 1. ParentNode
// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

//2. childNode
// const parent = document.querySelector('.parent');
// const children = parent.childNodes;
// console.log(children)

// 3. nextElementSibling()

// const heading = document.querySelector('.heading');

// console.log(heading.nextElementSibling);

// 4. previousElementSibling

// const subheading = document.querySelector('h3');

// console.log(subheading.previousElementSibling);

// MANIPULATION

// const headings = document.querySelector('.heading')
// const heading = document.querySelector('#heading')
// heading.innerHTML = ' Web Dev is awesome';
// heading.style.color = " blue";
// heading.style.fontSize = "30px";
// heading.classList.add('title'); // to add class name in html
// heading.classList.remove('title'); // to remove class name in html
// headings.style.color = " white";

// Advance Manipulation

// Create Elements

// const heading = document.createElement('h1');
// heading.innerHTML = "javaScript is awesome."
//     // h1 is created but it has not been added/ appended.
//     // to append above created element apply following
// const parent = document.querySelector(".parent");
// parent.appendChild(heading); // it appends element at last
// console.log(heading);

// const subheading = document.createElement('h3');
// subheading.innerHTML = 'Web Dev is awesome!';
// // if you want to append element before any other element
// //Syntax ==== insertAdjacentElement(position, element);
// const parents = document.querySelector('#heading');
// parents.insertAdjacentElement('afterend', subheading);

//DOM EVeNTS

// Our task is, to change headig color after pressing the button

// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function(event) {
//     heading.style.color = ' white';
//     heading.style.fontSize = '40px';
//     console.log('button clicked!', event);
// })
