// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

function sortArray() {
  console.log(ages.sort());
}

function average() {
  let agesSum = 0;
  ages.forEach((age) => {
    agesSum += age;
  });
  return Math.abs(agesSum / ages.length);
}

function findRange() {
  let max = Math.max(...ages);
  let min = Math.min(...ages);
  console.log(max - min);
}

function compare() {
  let max = Math.max(...ages);
  let min = Math.min(...ages);
  console.log(Math.abs(min - average()), Math.abs(max - average()));
}

function findMedian() {
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

  ages.sort();
  const middle = Math.floor(ages.length / 2);

  let median;

  if (ages.length % 2 === 0) {
    median = (ages[middle - 1] + ages[middle]) / 2;
  } else {
    median = ages[middle];
  }

  console.log(median);
}

// sortArray();
// console.log(average());
// findRange();
compare();
