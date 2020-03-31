import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [liveCounter, setLiveCounter] = useState(false);

  useEffect(() => {
    const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    if (counterFromLocalStorage) {
      setCounter(counterFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  useEffect(() => {
    if (liveCounter) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
  }, [counter, liveCounter]);

  const setCounterWithValue = value => () => {
    setCounter(value);
  }

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpdateInput = () => {
    const value = Number(input);
    if (isNaN(value)) {
      setInput('');
    } else {
      setCounter(value);
      setInput('');
    }
  }

  const handleCounter = () => {
    setLiveCounter(!liveCounter);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={setCounterWithValue(counter - 1)}>
          -1
        </button>
        
        <button onClick={setCounterWithValue(0)}>
          Reset
        </button>
        
        <button onClick={setCounterWithValue(counter + 1)}>
          +1
        </button>
      </div>

      <div>
        <input onChange={handleInputChange} value={input} />
        <button onClick={handleUpdateInput}>Update</button>
      </div>

      <div>
        <button onClick={handleCounter}>
        {liveCounter ? 'Stop' : 'Start'} counter</button>
      </div>
    </div>
  );
}

export default App;
