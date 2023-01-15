const object = {
  rocket: "🚀",
  home: "🏠",
};

// get keys of the object

// for (k in object) {
//   console.log(k);
// }

const obj1 = {
  rocket: "🚀",
  fuel: 2,
  config: {
    name: "mars",
  },
};

obj1.fuel = 200;
obj1["year"] = 2000;

// console.log(obj1);

// another way to create an object

const obj2 = new Object(); // constructor
obj2.readBook = "📕";
obj2.blueBook = "📘";
obj2.myValue = "1 blue book";

// console.log(obj2);

// one more way to create an object

const powers = {
  fly: true,
  coordinate: Math.random() + 2,
};

const obj3 = Object.create(powers);
// console.log(obj3.coordinate);
// console.log(Object.getPrototypeOf(obj3));

// let's learn one more
const obj4 = Object.create({});

// adding values to this empty object--  method -1
// obj4.name = "Ankit";
// console.log(obj4);

// adding values to this empty object--  method -2
Object.defineProperty(obj4, "book", {
  get: () => "blue book 📘",
  enumerable: true,
});

// console.log(obj4.book);

// only work when enumerable is set to true
for (k in obj4) {
  // console.log("value is: ", k);
}

// yes there is one more
const obj5 = {
  comics: "marvel",
  pen: "",
  printComic: function () {
    this.pen += "🖊️🗒️";
    // console.log(this);
    return this;
  },
  // printaComic: () => {
  //     // this.pen += '🖊️🗒️'
  //     console.log(this);

  // },
};

// const obj5 = {
//   comics: "marvel",
//   pen: "",
//   printComic: function () {
//     this.pen += "🖊️🗒️";
//     console.log(this);
//     return this;
//   },
//   // printaComic: () => {
//   //     // this.pen += '🖊️🗒️'
//   //     console.log(this);

//   // },
// };

// console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());

// Let's Learn again

let Student = {}; // empty object

Student.name = "John Kumar";
Student.age = 20;
Student.subjects = ["Maths", "Science", "Computer Science"];
Student.isPresent = true;
Student["class"] = "VII";
Student["phone number"] = 9898989898;

// console.log(Student.name);
// console.log(Student.subjects);

// console.log(Student["name"]);
// console.log(Student["subjects"]);
// console.log(Student["phone number"]);
// console.log(Student);

const Teacher = new Object();
Teacher.name = "Tony Prasad";
Teacher.age = 50;
Teacher.Teachers = ["Algorithms", "Maths"];
Teacher.isPresent = true;
Teacher["department"] = "Computer Science";
Teacher["phone number"] = 9898989898;

// console.log(Teacher);

Student.sayHi = function () {
  console.log(`Hello ${this.name}`);
};

// Student.sayHi();

function displayAge() {
  console.log(`${this.name} is ${this.age} years old`);
}

Student.displayAge = displayAge;
Teacher.displayAge = displayAge;

Student.displayAge();

Teacher.displayAge();
