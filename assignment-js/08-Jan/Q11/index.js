// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const todayDate = new Date();

//  What is the year today?
console.log(todayDate.getFullYear()); // 2023

// What is the month today as a number?
console.log(todayDate.getMonth()); // 0

// What is the date today?
console.log(todayDate.getDate()); //14

// What is the day today as a number?
console.log(todayDate.getDay()); //6 -- saturday

// What is the hours now?
console.log(todayDate.getHours()); // 11

// What is the minutes now?
console.log(todayDate.getMinutes()); //  10

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(todayDate.getTime() / 1000);
