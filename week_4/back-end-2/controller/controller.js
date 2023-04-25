let db = require('../server/db.json');
let id = db.length;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(db);
  },
  createHouse: (req, res) => {
    let { body: house } = req;
    try {
      if (house.address === '') {
        throw 'please provide an address';
      } else {
        id++;
        house.id = id;
        house.price = +house.price;
        db.push(house);
        res.status(200).send(db);
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateHouse: (req, res) => {
    let houseId = +req.params.id;
    let type = req.body.type;
    for (let house of db) {
      if (houseId === house.id) {
        if (type === 'plus') {
          house.price++;
          res.status(200).send(db);
        } else if (type === 'minus') {
          house.price--;
          res.status(200).send(db);
        }
      }
    }
  },
  deleteHouse: (req, res) => {
    let houseId = +req.params.id;
    db.forEach((house, index) => {
      if (houseId === house.id) {
        db.splice(index, 1);
        res.status(200).send(db);
      }
    });
  },
};
