// 03. Declare a variable and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

const message = "I dream that I am flying";

newMessage = message.toUpperCase(); // toUpperCase doesn't modify the original string it converts the original string and return it, so we need to store it in a variable
console.log(newMessage);

// Another Way is that we can directly display that in console
console.log(message.toUpperCase());
