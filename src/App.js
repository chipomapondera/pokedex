import React from 'react';
import PokemonPage from './components/pokemonPage/PokemonPage';
import data from './data/PokemonData'
import './App.css';


function App() {
  return (
    <div className="App">
      <PokemonPage allPokemonInfo={data.pokemonDirectory.pokemonsInfo} allAttributeFilters={data.attributeFilterInfo}/> 
    </div>
  );
}

export default App;

