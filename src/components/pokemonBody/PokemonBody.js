import React from 'react';
import PokemonCard from './pokemonCard/PokemonCard'
import './BodyStyling.css'

const BodyWrapper = (props) => {
    return (
        <div className="body-wrapper">
            {props.children}
        </div>
    )
}

const PokemonBody =({info})=> {
    const {imageUrl, pokemonName} = info
    return (
        <BodyWrapper>
            <PokemonCard imageUrl={imageUrl} pokemonName={pokemonName}/>
        </BodyWrapper>
    )
}

export default PokemonBody
