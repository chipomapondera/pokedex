import React, {Fragment} from 'react';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';

import './HeaderStyling.css';

const PokemonHeader = ({allAttributeFilters, value, onChange, onClickHandler}) => {
    return (
        <>
            <div className="site-header">
                <input className="text-input" placeholder="Enter Pokemon name..." value={value} onChange={onChange}/>
                <PokemonAttributeFilter allAttributeFilters={allAttributeFilters} onClickHandler={onClickHandler}/>
            </div>
            
        </>
    )
}

export default PokemonHeader
