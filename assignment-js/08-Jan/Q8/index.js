// Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

const string = "  Hello  "; // 2 blank spaces each side

console.log(string);
console.log(string.length); // 9 5 letters and 4 blank spaces

const newString = string.trim(" "); // trim method doesn't modify the  original string
console.log(newString);
console.log(newString.length); // 5
