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


const PokemonBody =({allPokemonInfo})=> {
    return (
        <BodyWrapper>
            <div className="list-wrapper">
                {allPokemonInfo.map((card) => {
                    const { url} = card
                    return <div className="card-container">
                        <PokemonCard pokemonUrl={url} />
                    </div>
                })}
            </div>    
        </BodyWrapper>
    )
}

export default PokemonBody
