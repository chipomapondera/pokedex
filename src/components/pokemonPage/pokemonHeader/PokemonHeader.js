import React, {Fragment} from 'react';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';

import './HeaderStyling.css';

const PokemonHeader = ({allAttributeFilters, value, onChange, onClickHandler, allOnClickHandler}) => {
    return (
        <>
            <div className="site-header">
                <input className="text-input" placeholder="Enter Pokemon name..." value={value} onChange={onChange}/>
                <PokemonAttributeFilter allAttributeFilters={allAttributeFilters} onClickHandler={onClickHandler}/>
                <button onClick={()=>allOnClickHandler()}>All</button>
            </div>
            
        </>
    )
}

export default PokemonHeader
