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
const goalIdeas = [
	'Take a trip to a foreign country!',
	'Create a mobile app!',
	'Make ten new professional relationships!',
	'Start a business!',
	'Treat yourself to a nice massage!',
	'Do nothing for a whole month!',
	'Exercise 3 days a week for a year!',
	'Take an exciting course!',
	'Go on a blind date!',
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
		// choose random fortune
		let randomIndex = Math.floor(Math.random() * fortunes.length);
		let randomFortune = fortunes[randomIndex];

		res.status(200).send(randomFortune);
	},
	getGoals: (req, res) => {
		// sends the goals array
		res.status(200).send(goals);
	},
	addGoal: (req, res) => {
		// grabs goal from input
		let { goal } = req.body;
		// if not an empty string, pushes to goal array
		if (goal) goals.push(goal);

		res.status(200).send(goals);
	},
	editGoal: (req, res) => {
		// takes in a goal and replaces at index
		const { index } = req.params;
		const { goal } = req.body;
		console.log(index);
		goals.splice(+index, 1, goal);

		res.status(200).send(goals);
	},
	deleteGoal: (req, res) => {
		// finds goal by index and removes from array
		let { index } = req.params;
		goals.splice(+index, 1);

		res.status(200).send(goals);
	},
	getGoalIdea: (req, res) => {
		// get random goal idea
		let randomIndex = Math.floor(Math.random() * goalIdeas.length);
		let randomGoal = goalIdeas[randomIndex];

		res.status(200).send(randomGoal);
	},
};
