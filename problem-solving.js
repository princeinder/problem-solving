var n = 9;
var arr = [
  [1, 15, 8, 10],
  [8, 130, 10, 120],
];
var data = "asdds";
var arr1 = [8, 10, 2, 8, 2];

factorialNumber = (number) => {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorialNumber(number - 1);
  }
};

function findLargest(arr) {
  return arr.map((data) =>
    data.reduce((previousLargestNumber, currentLargestNumber) =>
      currentLargestNumber > previousLargestNumber
        ? currentLargestNumber
        : previousLargestNumber
    )
  );
}

function removeItem(arr, b) {
  return arr.map((data) =>
    data.filter((rem) => b.includes(rem) === false && rem)
  );
}
function palidromeNumber(arr1) {
  return arr1.reduce((currentLargestNumber, previousLargestNumber) =>
    currentLargestNumber === previousLargestNumber
      ? currentLargestNumber
      : previousLargestNumber
  );
}

console.log(removeItem(arr, [15, 10, 8]));
console.log(factorialNumber(5));
console.log(findLargest(arr));
console.log(palidromeNumber(arr1));
