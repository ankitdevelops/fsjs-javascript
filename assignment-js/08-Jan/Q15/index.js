// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

function checkGrades(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A";
  } else if (marks > 70 && marks < 90) {
    return "B";
  } else if (marks > 60 && marks < 70) {
    return "C";
  } else if (marks > 50 && marks < 60) {
    return "D";
  } else if (marks > 0 && marks < 50) {
    return "F";
  }
}
const grade = 76;
console.log(checkGrades(grade));
