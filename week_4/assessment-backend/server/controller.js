const fortunes = [
  'A fresh start will put you on your way.',
  'Education is the ability to meet life’s situations.',
  'One can never fill another’s shoes, rather he must outgrow the old shoes.',
  'The person who will not stand for something will fall for anything.',
  'Your difficulties will strengthen you.',
];
const compliments = [
  "Gee, you're a smart cookie!",
  'Cool shirt!',
  'Your Javascript skills are stellar.',
];
const goals = [];

module.exports = {
  getCompliment: (req, res) => {
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  addGoal: (req, res) => {
    let { goal } = req.body;
    if (goal) goals.push(goal);
    res.status(200).send(goals);
  },
};
