import React from 'react';
import './AttributeFilterStyling.css';
import {buttonClassName} from '../../pokemonBody/pokemonAttribute/PokemonAttribute';

const PokemonAttributeFilter = ({allAttributeFilters, onClickHandler}) => {
    return (
        <div > 
                {allAttributeFilters.map((attributeTerm) => {
                    console.log('attributeTerm', attributeTerm)
                    const colorClass = buttonClassName(attributeTerm)
                    return <button className={`attribute-button ${colorClass}`} onClick={()=>onClickHandler(attributeTerm)}>{attributeTerm}</button>
                })}
        </div>
    )
}

export default PokemonAttributeFilter

