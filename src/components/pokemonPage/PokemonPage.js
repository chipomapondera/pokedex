import React, {Fragment, useState} from 'react';
import Lodash from 'lodash';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({info}) => {

    const [userText, setUserText] = useState('')
    const [pokemonData, setPokemonData] = useState(info)
    // const [searchValue, setSearchValue] = useState(null)

    

    const updateSearchValue = (event) => {
        event.preventDefault();
    
        setUserText(event.target.value);
        console.log('this is the', userText)
       
    }

  const upodatePokemonData = () =>{
    _.filter(pokemonData, function(pokemon) { return pokemon.pokemonName.includes(userText); });
  }

useEffect(()=>{
    searchPokemon()
    if(userText) {
        debounce( upodatePokemonData, 250, { 'maxWait': 750 } )
    }
},[userText])

    return (
        <>
            <PokemonSearch value={userText} onChange={(e)=>updateSearchValue(e)} />
            <PokemonBody info={pokemonData} />
        </>
    )
}

export default PokemonPage

