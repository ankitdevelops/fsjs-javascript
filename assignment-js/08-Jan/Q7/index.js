// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const wordsArray = [
  "JavaScript",
  "Python",
  "C++",
  "pw skills",
  "pw skills",
  "SQL",
  "Java",
];

// display index of last occurrence
console.log(wordsArray.lastIndexOf("pw skills"));

// display index of first occurrence
console.log(wordsArray.indexOf("pw skills"));
