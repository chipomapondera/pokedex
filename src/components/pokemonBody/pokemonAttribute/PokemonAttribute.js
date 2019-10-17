import React from 'react';
import './AttributeStyling.css'

const PokemonAttribute = ({pokemonAttribute}) => {
    return (
            <div className="pokemon-attribute" pokemonAttribute={pokemonAttribute}>{pokemonAttribute}</div>
    )
}

export default PokemonAttribute

