import React from 'react';
import PokemonPage from './components/pokemonPage/PokemonPage';
import data from './data/PokemonData'
import './App.css';


function App() {
  return (
    <div className="App">
      <PokemonPage info={data.pokemonInfo} /> 
    </div>
  );
}

export default App;

