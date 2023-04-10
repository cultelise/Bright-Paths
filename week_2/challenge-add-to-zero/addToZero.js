// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
let x = false;

for (let i = 0; i < array.length; i++) {
  let num1 = array[i];
  for (let j = 0; j < array.length; j++) {
    let num2 = array[j];
    if (num1 + num2 === 0) {
      console.log(`${num1} plus ${num2} evaluate to 0.`, true);
    }
  }
}
