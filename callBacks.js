// callbacks

// there is scenario, we have to execute following
// task in given order only
/*
  1. Register
  2. Send welcome email
  3. login
  4. get user data
  5. Display user data
 */
//  function waitForThreeSeconds() {
//      let ms = 3000 + new Date().getTime();
//      while (new Date() < ms) {}
//  }

//  function register() {
//      waitForThreeSeconds();
//      console.log('Register end');
//  }

//  function sendEmail() {
//      waitForThreeSeconds();
//      console.log('Email end');

//  }

//  function login() {
//      waitForThreeSeconds();
//      console.log('ligin end');

//  }

//  function getUserData() {
//      waitForThreeSeconds();
//      console.log('got user data');

//  }

//  function displayUserData() {
//      console.log('userdata displayed');

//  }

//  register()
//  sendEmail()
//  login()
//  getUserData()
//  displayUserData()
// console.log('other application work')

// COMMENT : here we see that until the all functions gets executed
// our last console not get execued. above fuctions are executing like
// synchronous function. so, it blocks further execution until itself
// gets executed. we have to get rid of it.

// now we have to make it asynchronous by using setTimeout()

//  function register() {
//      setTimeout(() => {
//          console.log('Register end');
//      }, 2000);
//  }

//  function sendEmail() {
//      setTimeout(() => {
//          console.log('Email end');
//      }, 1000);
//  }

//  function login() {
//      setTimeout(() => {
//          console.log('ligin end');
//      }, 1000);
//  }

//  function getUserData() {
//      setTimeout(() => {
//          console.log('got user data');
//      }, 1000);
//  }

//  function displayUserData() {
//      setTimeout(() => {
//          console.log('userdata displayed');
//      }, 1000);
//  }

//  register()
//  sendEmail()
//  login()
//  getUserData()
//  displayUserData()
//  console.log('other application work')

// COMMENT: Also, After applying setTimeout(), we are not unable to
// get our desired result. As it disply the function at last which has
// bigger wait time.

function register(callback) {
  // we are passing a callback() function
  setTimeout(() => {
    console.log("Register end");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email end");
    callback();
  }, 1000);
}

function login(callback) {
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("got user data");
    callback();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("userdata displayed");
  }, 1000);
}

// Below nested function call is called Callback hell

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("other application work");
