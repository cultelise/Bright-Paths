// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

// for (let num of n) {
//   if (!newArray.includes(num) && num > 0) newArray.push(num);
// }
let n = 10;

function luckyNumbers(num) {
  let newArray = [];
  for (let i = 1; i <= num; i++) {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    if (!newArray.includes(randomNum)) {
      newArray.push(randomNum);
    } else {
      i--;
    }
  }
  return newArray;
}

console.log(luckyNumbers(n));
