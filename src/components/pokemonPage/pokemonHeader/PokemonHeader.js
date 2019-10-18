import React, {Fragment} from 'react';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';
import './HeaderStyling.css';

const PokemonHeader = ({allAttributeFilters, value, onChange}) => {
    return (
        <>
            <div className="site-header">
                <input className="text-input" placeholder="Enter Pokemon name..." value={value} onChange={onChange}/>
                <PokemonAttributeFilter allAttributeFilters={allAttributeFilters}/>
            </div>
            
        </>
    )
}

export default PokemonHeader
