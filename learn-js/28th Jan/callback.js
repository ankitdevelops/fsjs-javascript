// What is callback function
// A callback function in JavaScript is a function that is passed as an argument to another function, and is executed after the outer function has completed. It is commonly used in event handling, as well as in other situations where a function should be executed after another function has finished.

// For example, consider a simple function that takes two arguments: a number and a callback function. The function calculates the square of the number, and then calls the callback function, passing the result as an argument.

// normal function
function square(num, callback) {
  var result = num * num;
  callback(result);
}

// callback function
function IAmCallback(result) {
  console.log(result); // 25
}

// passing function as an argument
square(5, IAmCallback);

// Callback functions are also often used in asynchronous programming, where a function is called, and the program continues to execute other code before the function has completed. The callback function is then called when the function has finished executing, to handle the results.

// function displayMessage() {
//   console.log("How are You?");
// }

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// setTimeout(displayMessage, 2000);
// sayHello("Ankit");

function displayMessage(name, callbackFunction) {
  console.log("How are You?");
  callbackFunction(name);
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}

setTimeout(displayMessage, 2000, "Ankit", sayHello);
