import React, {Fragment} from 'react';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({info}) => {

    return (
        <>
            <PokemonSearch />
            <PokemonBody info={info}/>
        </>
    )
}

export default PokemonPage

