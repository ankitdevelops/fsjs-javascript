// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Egypt",
  "Iran",
  "Germany",
  "Turkey",
  "Thailand",
  "United Kingdom",
  "France",
];

function check() {
  if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
  } else {
    countries.push("Ethiopia");
  }
}

check();
console.log(countries);
