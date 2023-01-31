// // function as values
// const var1 = function sayHello() {
//   console.log("Hello There");
// };

// var1(); // -> Hello There

// // returning function from function
// function returnFunction() {
//   return function () {
//     console.log("I am being return as function");
//   };
// }

// let var2 = returnFunction(); //stores the returned function
// var2(); // I am being return as function

// // function as argument
// function square(num, callback) {
//   var result = num * num;
//   callback(result);
// }

// function IAmCallback(result) {
//   console.log(result); // 25
// }

// // passing function as an argument
// square(5, IAmCallback); // -> 25

const numbers = [2, 4, 5, 6, 7, 8, 9, 10];

function square(number) {
  return number * number;
}

function cube(number) {
  return number * number;
}

function doubles(number) {
  return 2 * number;
}

function calculate(numbers, operation) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    output.push(operation(numbers[i]));
  }
  return output;
}

// let squaredNumbers = calculate(numbers, square);
// console.log(squaredNumbers);

// let cubedNumbers = calculate(numbers, cube);
// console.log(cubedNumbers);

let doubledNumbers = calculate(numbers, doubles);
console.log(doubledNumbers); //  [4, 8, 10, 12, 14, 16, 18, 20];

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

let squaredNumbers = numbers.map(square);
console.log(squaredNumbers); //
