let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "black adam"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.ankit = function () {
  console.log(`Ankit is present in all objects`);
};

myHeros.ankit();

// inheritance

const User = {
  name: "Mohit Kumar",
  email: "mohit@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};
const TSAssistant = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // older syntax
};

// binding teacher with user(inheriting user properties to teacher)

// old syntax

Teacher.__proto__ = User; // Inheriting User object properties to Teacher Object

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher); // Inheriting teacher object properties to Teaching support

// Add prototype to String Object that return length of hte string by after removing  blank spaces.
String.prototype.trueLength = function () {
  return this.trim().length;
};
