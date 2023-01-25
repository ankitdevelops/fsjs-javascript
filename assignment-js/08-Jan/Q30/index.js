// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

console.log(calculator.add(5, 7)); // 12
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(3, 4)); // 12
console.log(calculator.divide(16, 4)); // 4
