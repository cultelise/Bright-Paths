const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let weather = [];

app.get('/api/users', (req, res) => {
  let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
  res.status(200).send(friends);
});

app.get('/weather', (req, res) => {
  let temp;
  if (weather[0]) {
    const temperature = weather[Math.floor(Math.random() * weather.length)];
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  } else {
    const phrase = `<h3>Please enter a weather option.`;
    res.status(200).send(phrase);
  }
});

app.post('/weather/:temperature', (req, res) => {
  weather.push(req.params.temperature);
  res.status(200);
});

app.listen(4000, () => '...listening on 4000');
