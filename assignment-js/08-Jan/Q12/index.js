// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const newDate = new Date();

// YYYY-MM-DD HH:mm

console.log(
  `${newDate.getFullYear()}-${
    newDate.getMonth() < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth()
  }-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}`
);

//     - DD-MM-YYYY HH:mm

console.log(
  `${newDate.getDate()}-${
    newDate.getMonth() < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth()
  }-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
);

//     - DD/MM/YYYY HH:mm
console.log(
  `${newDate.getDate()}/${
    newDate.getMonth() < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth()
  }/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
);
