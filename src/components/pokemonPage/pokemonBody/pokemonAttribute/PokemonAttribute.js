import React from 'react';
import './AttributeStyling.css'

const buttonClassName = (pokemonAttribute) => {
    const lowerCaseAttribute = pokemonAttribute.toLowerCase()
    return `pokemon-attribute-${lowerCaseAttribute}`
}

const PokemonAttribute = ({pokemonAttributes}) => {
    return (
        <div className="attribute-container">
            {pokemonAttributes.map((pokemonAttribute) => {
                const colourClass = buttonClassName(pokemonAttribute)
                return <div className={`pokemon-attribute ${colourClass}`}>{pokemonAttribute}</div>
            })}
        </div>
            )}

export default PokemonAttribute

