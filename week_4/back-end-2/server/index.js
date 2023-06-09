const express = require('express');
const cors = require('cors');
const controller = require('../controller/controller');

const app = express();

app.use(express.json());
app.use(cors());

const { getHouses, createHouse, updateHouse, deleteHouse } = controller;

app.get('/api/houses', getHouses);

app.post('/api/houses', createHouse);

app.put('/api/houses/:id', updateHouse);

app.delete('/api/houses/:id', deleteHouse);

app.listen(4004, () => console.log('listening on 4004...'));
