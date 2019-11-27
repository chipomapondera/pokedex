import React from 'react';
import './AttributeStyling.css'

export const buttonClassName = (pokemonAttribute) => {
    const lowerCaseAttribute = pokemonAttribute.toLowerCase()
    return `pokemon-attribute-${lowerCaseAttribute}`
}

const PokemonAttribute = ({pokemonAttributes}) => {
    return (
        <div className="attribute-container">
            {pokemonAttributes.map((pokemonAttribute) => {
                const colourClass = buttonClassName(pokemonAttribute.type.name)
                return <div className={`pokemon-attribute ${colourClass}`}>{pokemonAttribute.type.name}</div>
            })}
        </div>
            )}

export default PokemonAttribute

