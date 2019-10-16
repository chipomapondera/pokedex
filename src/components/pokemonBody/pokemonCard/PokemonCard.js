import React from 'react';
import './CardStyling.css';

const PokemonImageWrapper = () => {
    return (
        <div className="image-wrapper" />
    )
}

const PokemonImage = (props) => {
    return (
        <div className="pokemon-image">{props.data.pokemonInfo.imageUrl}</div>
    )
}

const PokemonNameWrapper = () => {
    return (
        <div className="name-wrapper" />
    )
}

const PokemonName = (props) => {
    return (
        <div className="pokemon-name">{props.data.pokemonInfo.pokemonName}</div>
    )
}

const PokemonCard =({imageUrl, pokemonName})=> {

    return (
        <div className="info-card">
            <PokemonImageWrapper>
                <PokemonImage src={imageUrl} />
            </PokemonImageWrapper>
            <PokemonNameWrapper>
                <PokemonName>{pokemonName}</PokemonName>
            </PokemonNameWrapper>
        </div>
    )
}

export default PokemonCard
