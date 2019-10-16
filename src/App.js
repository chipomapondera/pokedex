import React from 'react';
import PokemonSearch from './components/pokemonGame/pokemonSearch/PokemonSearch';
import PokemonBody from './components/pokemonGame/pokemonBody/PokemonBody';
import data from './data/PokemonData'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <PokemonBody info={data.pokemonInfo}/>
    </div>
  );
}

export default App;
