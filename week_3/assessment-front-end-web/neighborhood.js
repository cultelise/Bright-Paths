const restaurant = document.getElementById('restaurant');
const restaurantList = [
  {
    name: 'Chipotle',
    link: 'https://chipotle.com',
  },
  {
    name: "Mena's Grill",
    link: 'https://menastexmexgrill.com',
  },
  {
    name: 'Dia De Los Tacos',
    link: 'https://www.facebook.com/diadelostacosmesquite',
  },
  {
    name: 'Placidos Cocina',
    link: 'https://placidoscocina.com',
  },
];

restaurant.addEventListener('click', (event) => {
  let randomNum = Math.floor(Math.random() * restaurantList.length);
  let randomRestaurant = restaurantList[randomNum];
  alert(
    `Try ${randomRestaurant.name}!\nYou can find them @ ${randomRestaurant.link}.`
  );
});
