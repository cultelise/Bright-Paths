const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const {
	getCompliment,
	getFortune,
	getGoals,
	addGoal,
	editGoal,
	deleteGoal,
	getGoalIdea,
} = require('./controller');

app.get('/api/compliment', getCompliment);

app.get('/api/fortune', getFortune);

app.get('/api/goals', getGoals);

app.post('/api/goals', addGoal);

app.put('/api/goals/:index', editGoal);

app.delete('/api/goals/:index', deleteGoal);

app.get('/api/goal-idea', getGoalIdea);

app.listen(4000, () => console.log('Server running on 4000'));
