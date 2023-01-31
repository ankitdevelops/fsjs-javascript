// for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
//   // statement
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Hello world");
// }

// i = 0;
// while (i < 5) {
//   console.log("Hello World");
//   i++;
// }

// let i = 0;
// do {
//   console.log("Hello World");
//   i++;
// } while (i < 5);

let person = {
  name: "John Kumar",
  age: 32,
  occupation: "Full Stack Developer",
  skills: ["Python", "Django", "JavaScript"],
};

// let fruits = ["apple", "banana", "cherry"];

// for (const value of fruits) {
//   console.log(value);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(`count is ${i}`);
// }

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`count is ${i}`);
}
