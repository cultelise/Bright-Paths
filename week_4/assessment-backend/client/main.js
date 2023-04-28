const complimentBtn = document.getElementById('complimentButton');
const fortuneBtn = document.getElementById('fortuneButton');
const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');
const goalInput = document.getElementById('goalInput');

const baseUrl = 'http://localhost:4000/api';
const getCompliment = () => {
  axios.get('http://localhost:4000/api/compliment/').then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get('http://localhost:4000/api/fortune/').then((res) => {
    const data = res.data;
    alert(data);
  });
};

const addGoal = (event) => {
  event.preventDefault();
  const body = {
    goal: goalInput.value,
  };
  const response = axios.post(`${baseUrl}/goals`, body);
  response.then((res) => {
    const goals = res.data;
    goalList.textContent = '';
    goals.forEach((goal) => {
      const listElement = document.createElement('li');
      listElement.textContent = goal;
      listElement.classList.add('goal');
      listElement.addEventListener('click', (event) => {
        listElement.classList.toggle('stricken');
      });
      goalList.appendChild(listElement);
    });
  });
  goalInput.value = '';
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
goalForm.addEventListener('submit', addGoal);
