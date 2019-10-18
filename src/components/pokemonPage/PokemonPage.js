import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({info}) => {

    const [userText, setUserText] = useState('')
    const [pokemonData, setPokemonData] = useState(info)
    // const [searchValue, setSearchValue] = useState(null)

    

    // const updateSearchValue = (event) => {
    //     event.preventDefault();
    
    //     setUserText(event.target.value);
    //     console.log('this is the', userText)
       
    // }
    // console.log(filter(pokemonData, function(pokemon) { 
    //     const normalPokemonName = pokemon.pokemonName.toLowerCase()
    //     return normalPokemonName.includes('bul') })
    //     )

    // console.log('asdasd', userText)
  const upodatePokemonData = () =>{
      console.log('232234')
    const filterData = filter(info, function(pokemon) { 
        const normalPokemonName = pokemon.pokemonName.toLowerCase()
        return normalPokemonName.includes(userText);
    });
    setPokemonData(filterData)
  }

useEffect(()=>{
        debounce( upodatePokemonData, 250, { 'maxWait': 750 } )
},[userText])

const finalData = userText ? pokemonData : info
    return (
        <>
            <PokemonSearch value={userText} onChange={(e)=>setUserText(e.target.value)} />
            <PokemonBody info={finalData} />
        </>
    )
}

export default PokemonPage

