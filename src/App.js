import React from 'react';
import PokemonSearch from './components/pokemonSearch/PokemonSearch';
import PokemonBody from './components/pokemonBody/PokemonBody';
import data from './data/PokemonData'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <PokemonBody info={data.pokemonInfo[0]}/>
    </div>
  );
}

export default App;

