import React, {Fragment} from 'react';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';
import './HeaderStyling.css';


const PokemonHeader = ({value, onChange}) => {
    return (
        <>
            <div className="site-header">
                <PokemonSearch value={value} onChange={onChange}/>
                <PokemonAttributeFilter />
            </div>
        </>
    )
}

export default PokemonHeader
