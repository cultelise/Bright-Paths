const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');
const buttonArray = [colorButton, placeButton, ritualButton];

buttonArray.forEach((button) => {
  button.addEventListener('click', alertFunction);
});

function alertFunction(event) {
  let id = event.target.id;
  switch (id) {
    case 'color':
      alert('My favorite color is black!');
      break;
    case 'place':
      alert('My favorite place is home!');
      break;
    case 'ritual':
      alert('My favorite ritual is writing!');
      break;
    default:
      console.log('Error');
      break;
  }
  // if (id === 'color') {
  // } else if (id === 'place') {
  //   alert('My favorite place is home!');
  // } else if (id === 'ritual') {
  //   alert('My favorite ritual is writing!');
  // }
}
