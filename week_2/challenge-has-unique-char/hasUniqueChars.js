// Write your code below

function unique(word) {
  let wordArray = word.split('');
  console.log(wordArray);
  let check = true;
  for (let i = 0; i < wordArray.length; i++) {
    const element1 = wordArray[i];
    for (let j = i + 1; j < wordArray.length; j++) {
      const element2 = wordArray[j];
      console.log('element1:', element1, 'element2:', element2);
      if (element1 === element2) {
        check = false;
      }
    }
  }
  return check;
}

console.log(unique('Wednesday'));
