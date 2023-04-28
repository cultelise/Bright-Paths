const complimentBtn = document.getElementById('complimentButton');
const fortuneBtn = document.getElementById('fortuneButton');
const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');
const goalInput = document.getElementById('goalInput');
const goalBtn = document.getElementById('goalButton');

const baseUrl = 'http://localhost:4000/api';

const getCompliment = () => {
	axios.get('http://localhost:4000/api/compliment/').then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getFortune = () => {
	axios.get(`${baseUrl}/fortune`).then((res) => {
		const data = res.data;
		alert(data);
	});
};
// gets all goals in the database
const getGoals = () => {
	const response = axios.get(`${baseUrl}/goals`);
	response.then((res) => {
		const goals = res.data;
		// calls the displayGoals function with the list of goals as an argument
		displayGoals(goals);
	});
};
// takes in an array of goals and displays them in the tracker
const displayGoals = (goals) => {
	// clears the ul of anything previously listed
	goalList.textContent = '';
	goals.forEach((goal, index) => {
		// creates a div for each goal
		const goalDiv = document.createElement('div');
		goalDiv.classList.add('goalDiv');
		// creates an li for each goal
		const listElement = document.createElement('li');
		// sets li text to goal text
		listElement.textContent = goal;
		// adds class and id
		listElement.classList.add('goal');
		listElement.id = `goal${index}`;
		// enables strikethrough when goal text is clicked
		listElement.addEventListener('click', () => {
			listElement.classList.toggle('stricken');
		});
		// creates edit button
		const editBtn = document.createElement('button');
		editBtn.textContent = 'edit';
		editBtn.id = `edit${index}`;
		editBtn.addEventListener('click', () => {
			// creates a form
			const editForm = document.createElement('form');
			editForm.id = `form${index}`;
			// and an input
			const editor = document.createElement('input');
			editor.type = 'text';
			// when the form is submitted, make a put request with the input's value
			editForm.addEventListener('submit', (event) => {
				event.preventDefault();
				const body = {
					goal: editor.value,
				};
				const response = axios.put(
					`${baseUrl}/goals/${editForm.id.charAt(editForm.id.length - 1)}`,
					body
				);
				// reload with edited goal
				response.then(() => getGoals());
				// remove the form and input from DOM
				goalDiv.removeChild(editForm);
			});
			editForm.appendChild(editor);
			goalDiv.appendChild(editForm);
			// sets focus into the input
			editor.focus();
		});
		// creates a delete button
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'delete goal';
		deleteBtn.id = `btn${index}`;
		// on click deletes the goal with the same id # in the backend
		deleteBtn.addEventListener('click', () => {
			const response = axios.delete(
				`${baseUrl}/goals/${deleteBtn.id.charAt(deleteBtn.id.length - 1)}`
			);
			// gets the newly edited goal list
			response.then(() => getGoals());
		});
		goalDiv.appendChild(listElement);
		goalDiv.appendChild(editBtn);
		goalDiv.appendChild(deleteBtn);
		goalList.appendChild(goalDiv);
	});
};
// processes goal form input
const addGoal = (event) => {
	event.preventDefault();
	const body = {
		goal: goalInput.value,
	};
	// posts a new goal to the backend
	const response = axios.post(`${baseUrl}/goals`, body);
	// then grabs the updated list by calling the getGoals function
	response.then(() => getGoals());
	goalInput.value = '';
};

const getGoalIdea = () => {
	const response = axios.get(`${baseUrl}/goal-idea`);
	response.then((res) => alert(res.data));
};

// loads up the goals on refresh
addEventListener('DOMContentLoaded', getGoals);

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
goalForm.addEventListener('submit', addGoal);
goalBtn.addEventListener('click', getGoalIdea);
