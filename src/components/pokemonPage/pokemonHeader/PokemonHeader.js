import React, {Fragment} from 'react';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';
import './HeaderStyling.css';

const PokemonHeader = ({allAttributeFilters, value, onChange}) => {
    return (
        <>
            <div className="site-header">
                <PokemonSearch value={value} onChange={onChange}/>
                <PokemonAttributeFilter allAttributeFilters={allAttributeFilters}/>
            </div>
            
        </>
    )
}

export default PokemonHeader
