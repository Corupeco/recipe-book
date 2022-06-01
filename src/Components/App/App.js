import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Recipes from '../Recipes/Recipes';

export const recipe = {
  name: 'Bread',
  type: 'Appetizer',
  source: 'King Arthur Baking Company',
  img: '../../../imgs/bread.PNG',
}

const recipes = [
  recipe,
  recipe,
  recipe,
];

function View({ state }) {
  if (state.home && !state.recipes && !state.about) {
    return <Home />
  } else if (!state.home && state.recipes && !state.about) {
    return <Recipes recipes={recipes} />
  } else if (!state.home && !state.recipes && state.about) {
    return <h1>About</h1>
  }
}

function App() {
  const [state, setState] = useState({
    home: true,
    recipes: false,
    about: false,
  });

  return (
    <div className="App">
      <Header setState={setState} />
      <View state={state} />
    </div>
  );
}

export default App;
