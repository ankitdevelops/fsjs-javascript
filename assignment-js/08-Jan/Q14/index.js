// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

function checkEven(number) {
  if (number % 2 === 0) {
    return `${number} is an Even Number`;
  } else {
    return `${number} is an Odd Number`;
  }
}

console.log(checkEven(9));
