// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

function checkSeason(month) {
  if (month === "September" || month === "October" || month === "November") {
    return "Autumn Season";
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return "Winter Season";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring Season";
  } else if (month === "June" || month === "July" || month === "August") {
    return "Summer Season";
  } else {
    return "Something went wrong";
  }
}

month = prompt("Enter Month:");
alert(checkSeason(month));
