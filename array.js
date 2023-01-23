// Array and loops

//Array is an object to store collection of different or same data type of data.

const languages = ['javascript', 'python', 'c'];
// TO CHECK THE LENGTH OF ARRAY
console.log(languages.length);

//ACCESING INDEX/DATA FROM ARRAY
console.log(languages[1]);

// TO ADD ITEMS IN ARRAY at the END
languages.push('Dart');
console.log(languages);

// TO ADD ITEMS IN ARRAY at the BEGINING
languages.unshift('Java');
console.log(languages);

// TO DELET ITEMS IN ARRAY at the END
languages.pop('Dart');
console.log(languages);
console.log(languages.pop());

// TO DELET ITEMS IN ARRAY at the BEGINING
languages.shift('Java');
console.log(languages);
console.log(languages.shift());

// LOOPS IN JAVASCRIPT

for (let i = 0; i < 4; i++) {
    console.log("*")
}


// Array of objects
const actors = [
    //Creation of object under 
    {
        name: 'Actor1',
        payment: 100
    },

    {
        name: 'Actor2',
        payment: 200
    },

    {
        name: 'Actor3',
        payment: 300
    }
];

// purpose is to reduce 10 from each salary

for (let i = 0; i < actors.length; i++) {
    actors[i].payment = actors[i].payment - 10;
}

console.log(actors);

//FOR-EACH LOOP
actors.forEach((actor) => {
    actor.payment -= 10;

})
console.log(actors);

// FOR-OF LOOP
for (let actor of actors) {
    actor.payment -= 10
}
console.log(actors);

//FILTER

const students = [{
        name: 'Student 1',
        marks: 45
    },

    {
        name: 'Student 2',
        marks: 65
    },

    {
        name: 'Student 3 ',
        marks: 35
    },
];

// const failed = students.filter((student) => {
//     // return true; //It will include all elements of array
//     // return false; // It will exclude all elements of array = Empty array
//     if (student.marks < 45) {
//         return true;
//     }
//     return false;
// });

// one liiner code for above code 
const failed = students.filter((student) =>
    student.marks < 45

);
console.log(failed);

// MAP
const users = [{
        fname: "John",
        lname: "Doe"
    },
    {
        fname: "Jane",
        lname: "Doe"
    }
];

const finalUser = users.map((user) => {
    return {
        fullName: `${user.fname}  ${user.lname}`
            // fullName: user.fname + " " + user.lname
    }
});
console.log(finalUser);


//REDUCE
const Movies = [{
        name: "Rush",
        budget: 2000
    },
    {
        name: "Rush 2",
        budget: 3000
    },
    {
        name: "Rush 3",
        budget: 5000
    },
];

// purpose is to find total budget for these movies

// let total = 0;

// Movies.forEach((movie) => {
//     total = total + movie.budget;
// });
// console.log(total);

// our purpose can be achieved by using reduce

const total = Movies.reduce((acc, movie) => {
        acc = acc + movie.budget;
        return acc;
    }, 0) //initial value for begining addition

console.log(total);

//INDEXOF

const admin = [2, 3, 5];

const user = {
    name: 'xyz',
    id: 5
}

// we have to check that if person with id= 5 is an dmin or not

// console.log(admin.indexOf(user.id));// output 2

const isAdmin = admin.indexOf(user.id) > -1;
console.log(isAdmin); // true

// better solutions

//includes

console.log(admin.includes(user.id));

// find method

const userr = [{
        name: ' xyz',
        id: 1
    },
    {
        name: ' abc',
        id: 2
    },
    {
        name: ' pqr',
        id: 18
    },
];
// here my purpose is to find an user on basis of id
const myuser = userr.find((user) => {
    return user.id === 18;

    //            or

    // if (user.id === 18) {
    //     return true;

    // }
    // return false;
});

console.log(myuser);

// Sort method


// const names = ['john', 'ajay', 'vijay', 'komal', 'menika', 'sunaina', 'binit'];
// // we have to sort above array in alphabetical order
// names.sort();
// console.log(names);

// // splice method

const names = ['john', 'ajay', 'vijay', 'komal', 'menika', 'sunaina', 'binit'];

names.splice(2, 1)
console.log(names);