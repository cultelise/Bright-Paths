const button = document.querySelector('button');
const nameBox = document.querySelector('#nameBox');

const logger = () => {
  nameBox.textContent = '';
  axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
    res.data.results[0].residents.forEach((resident) => {
      axios.get(resident).then((res) => {
        const element = document.createElement('h2');
        element.textContent = res.data.name;
        nameBox.appendChild(element);
      });
    });
  });
};

button.addEventListener('click', logger);
