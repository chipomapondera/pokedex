import React, {useState, useEffect} from 'react';
import PokemonPage from './components/pokemonPage/PokemonPage';
import data from './data/PokemonData'
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState()

  const grabPokemons = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    const data = await res.json()
    return data
  }

  useEffect(async() => {
    const fetchedPokemons = await grabPokemons()
    setPokemons(fetchedPokemons.results)
    console.log('Hello World!')
  }, [])

  return (
    <div className="App">
      {pokemons ? <PokemonPage allPokemonInfo={pokemons} allAttributeFilters={data.attributeButtons.attributeInfo}/> : "Loading..."}
    </div>
  );
}

export default App;

