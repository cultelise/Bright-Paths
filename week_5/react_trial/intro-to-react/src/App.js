import { useState } from 'react';
import Child from './child';
import './App.css';

const App  = () => {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>Hello Elise</h1>
      <h3>User Input: {input}</h3>
      <input type="text" placeholder='Elise is awesome'
      onChange={(e) => setInput(e.target.value)} />
      <Child userInput={input} />
    </div>
  );
}

export default App;
