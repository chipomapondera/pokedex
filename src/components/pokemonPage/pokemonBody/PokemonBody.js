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


const PokemonBody =({allPokemonInfo})=> {
    return (
        <BodyWrapper>
            <div className="list-wrapper">
                {allPokemonInfo.map((card) => {
                    const {imageUrl, pokemonName, pokemonAttributes} = card
                    return <div className="card-container">
                        <PokemonCard imageUrl={imageUrl} pokemonName={pokemonName} />
                        <PokemonAttribute pokemonAttributes={pokemonAttributes} />
                    </div>
                })}
            </div>    
        </BodyWrapper>
    )
}

export default PokemonBody
