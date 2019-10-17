import React from 'react';
import PokemonCard from './pokemonCard/PokemonCard'
import './BodyStyling.css'
import PokemonAttribute from './pokemonAttribute/PokemonAttribute';

const BodyWrapper = (props) => {
    return (
        <div className="body-wrapper">
            {props.children}
        </div>
    )
}

const PokemonBody =({info})=> {
    console.log('this', info)
    return (
        <BodyWrapper>
            {info.map((card) => {
                const {imageUrl, pokemonName} = card
                return <div className="card-container">
                    <PokemonCard imageUrl={imageUrl} pokemonName={pokemonName}/>
                    {card.pokemonAttributes.map((specialAttribute) => {
                        return <div className="attribute-container"><PokemonAttribute pokemonAttribute={specialAttribute} /></div>
                    })}
                </div>
            })}
        </BodyWrapper>
    )
}

export default PokemonBody
