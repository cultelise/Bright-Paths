// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:

let least;
let most;

for (let i = 0; i < array.length; i++) {
  if (!least && !most) {
    least = array[i];
    most = array[i];
  }
  if (array[i] < least) {
    least = array[i];
  }
  if (array[i] > most) {
    most = array[i];
  }
}

console.log(least, most);
