// // 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let primeArray = [];

function printPrime() {
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeArray.push(i);
    }
  }
}

printPrime();
console.log(primeArray);
