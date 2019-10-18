import React from 'react';
import './AttributeFilterStyling.css';

const PokemonAttributeFilter = () => {
    return (
        <div className="attribute-filter"> 
            <button className="attribute-button">Grass</button>
            <button className="attribute-button">Poison</button>
            <button className="attribute-button">Fire</button>
            <button className="attribute-button">Flying</button>
            <button className="attribute-button">Water</button>
            <button className="attribute-button">Bug</button>
            <button className="attribute-button">Normal</button>
            <button className="attribute-button">Electric</button>
            <button className="attribute-button">Ground</button>
            <button className="attribute-button">Fairy</button>
        </div>
    )
}

export default PokemonAttributeFilter

