import React, {useState, useEffect} from 'react';
import './CardStyling.css';
import PokemonPage from '../../PokemonPage';
import PokemonAttribute from '../pokemonAttribute/PokemonAttribute'


const PokemonCard =({pokemonUrl})=> {
    const [pokemon, setPokemon] = useState('')

    const grabPokemon = async() => {
        const res = await fetch(pokemonUrl)
        const data = await res.json()
        return data
    }

    useEffect(async() => {
        const fetchedPokemon = await grabPokemon()
        setPokemon(fetchedPokemon)
    }, [])

    console.log("Pokemon URL", pokemonUrl)

    return (
        <>
        <div className="info-card">
            {pokemon ? (
                <>
                <div className="image-wrapper"> 
                    <img className="pokemon-image" src={pokemon.sprites.front_shiny}/>
                </div>
                <div className="name-wrapper">
                    <div className="pokemon-name">{pokemon.name}</div> 
                </div> 
                </>
            ) : "Loading..."}
        </div>
        {pokemon && <PokemonAttribute pokemonAttributes={pokemon.types} />}
        </>
    )
}

export default PokemonCard

// 1. Pass the pokemon.types to the PokemonAttribute
// 2. map() the types inside the attr to take the name of each pokemonAttribute.type.name 
// 3. Them it will have the 
