import React, {Fragment, useState} from 'react';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({info}) => {

    const [userText, setUserText] = useState('')

    const updateUserText = (event) => {
        event.preventDefault();
    
        setUserText(event.target.value);
        console.log('this is the', userText)
    }

    return (
        <>
            <PokemonSearch value={userText} onChange={updateUserText} />
            <PokemonBody info={info} />
        </>
    )
}

export default PokemonPage

