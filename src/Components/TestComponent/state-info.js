/*

import React, { useState } from 'react';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import RecipeList from '../RecipeList/RecipeList';
import TestComponent from '../TestComponent/TestComponent';

function App() {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div className="App">
      <TestComponent headline={greeting} onChangeHeadline={handleChange} />
    </div>
  );
}

export default App;

----------

import React, { useState } from 'react';

export default function TestComponent({ headline, onChangeHeadline }) {
  return (
    <div className="TestComponent">
      <h1>{headline}</h1>

      <input 
        type="text"
        value={headline}
        onChange={onChangeHeadline}
      />
    </div>
  );
}

*/