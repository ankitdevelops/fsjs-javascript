let number = prompt("Enter any number: ");
let isPrime = true;

function primeChecker(number) {
  if (number === 1) {
    alert("1 is neither prime or composite.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

primeChecker(number);

alert(isPrime ? "Prime Number" : "Not a Prime Number");
