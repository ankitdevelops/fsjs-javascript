// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

for (let i = 0; i <= 3; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    // process.stdout.write("*");
    stars += "*";
  }
  console.log(stars);
}

console.log("------------------------------------");

for (let i = 0; i < 3; i++) {
  let stars = "";
  for (let j = 0; j < 3; j++) {
    // process.stdout.write("*");
    stars += "*";
  }
  console.log(stars);
}

console.log("------------------------------------");

for (let i = 1; i <= 3; i++) {
  let spaces = "";
  for (let j = 1; j <= 3 - i; j++) {
    spaces += " ";
  }
  let stars = "";
  for (let k = 1; k <= 2 * i - 1; k++) {
    stars += "*";
  }
  console.log(spaces + stars);
}
