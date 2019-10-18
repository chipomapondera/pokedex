import React from 'react';
import './SearchStyling.css';

const PokemonSearch = ({value, onChange}) => {
    return (
        <div>
            <input className="text-input" placeholder="Enter Pokemon name..." value={value} onChange={onChange}/>
        </div>
    )
}

export default PokemonSearch
