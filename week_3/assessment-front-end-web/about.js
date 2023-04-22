console.log('hello world');

function handleSubmit(evt) {
  evt.preventDefault();
  alert('Form submission successful!');
}

let form = document.querySelector('#contact');
let img = document.querySelector('img');
let counter = 0;

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', (event) => {
  if (counter) {
    alert('Bob thanks you!');
    counter++;
  } else {
    alert('Bob loves to be rubbed!');
    counter--;
  }
});
