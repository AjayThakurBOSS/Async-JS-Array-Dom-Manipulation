// PROMISES
// Promises is an inbuilt class in javascript


function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register end');
            return resolve('Error while rejestering....')

            // resolve();

        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject('Error while sending email.')
            console.log('Email end');
            // resolve();
        }, 3000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('login end');
            resolve();
        }, 1000);
    });
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('got user data');
            resolve();
        }, 1000);
    })

}

function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('userdata displayed');
            resolve();
        }, 1000);
    })

}

// Below nested function call is called Callback hell

// register(function() {
//     sendEmail(function() {
//         login(function() {
//             getUserData(function() {
//                 displayUserData()
//             });
//         });
//     });
// });

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         // here you can show alert to user or any thiing
//         console.log('Error ...log')
//     })



// Async-await 

// async function authentication() {
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
// }

// authentication().then(() => {
//     console.log('All set....!')
// })
// //     .catch((err) => {
//     console.log(err)
// })


// Other way to catch error using try-catch
async function authentication() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

authentication().then(() => {
    console.log('All set....!')
})



console.log('other application work...!')