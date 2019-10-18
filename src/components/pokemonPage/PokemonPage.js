import React, {Fragment, useState} from 'react';
import PokemonHeader from './pokemonHeader/PokemonHeader';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({allPokemonInfo, allAttributeFilters}) => {

    const [userText, setUserText] = useState('')

    const updateUserText = (event) => {
        event.preventDefault();
    
        setUserText(event.target.value);
        console.log('this is the', userText)
    }

    return (
        <>
            <PokemonHeader
                allAttributeFilters={allAttributeFilters}
                value={userText} 
                onChange={updateUserText} 
            />
            <PokemonBody allPokemonInfo={allPokemonInfo} />
        </>
    )
}

export default PokemonPage

