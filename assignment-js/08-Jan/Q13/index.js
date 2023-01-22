// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//

function alertUser() {
  const age = prompt("Enter your age?");

  if (age >= 18) {
    alert("You You old enough to drive");
  } else {
    alert(`You need ${18 - age} years more to turn 18`);
  }
}

alertUser();
