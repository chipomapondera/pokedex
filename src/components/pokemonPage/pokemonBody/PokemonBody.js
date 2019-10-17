import React from 'react';
import PokemonCard from './pokemonCard/PokemonCard'
import PokemonAttribute from './pokemonAttribute/PokemonAttribute';
import './BodyStyling.css'


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
                const {imageUrl, pokemonName, pokemonAttributes} = card
                return <div className="card-container">
                    <PokemonCard imageUrl={imageUrl} pokemonName={pokemonName} />
                    <PokemonAttribute pokemonAttributes={pokemonAttributes} />
                </div>
            })}
        </BodyWrapper>
    )
}

export default PokemonBody
