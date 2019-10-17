import React from 'react';
import './CardStyling.css';


const PokemonCard =({imageUrl, pokemonName})=> {
console.log('this', imageUrl, pokemonName)
    return (
        <div className="info-card">
            <div className="image-wrapper"> 
                <img className="pokemon-image" src={imageUrl}/>
            </div>
            <div className="name-wrapper">
                <div className="pokemon-name">{pokemonName}</div>
            </div>
        </div>
    )
}

export default PokemonCard
