// Write your code below

let palindrome = 'bob';

const isPalindrome = (word) => {
  let wordArr = [];
  for (let letter of word.split('')) {
    wordArr.unshift(letter);
  }
  let flippedWord = wordArr.join('');
  if (word === flippedWord) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(palindrome));
