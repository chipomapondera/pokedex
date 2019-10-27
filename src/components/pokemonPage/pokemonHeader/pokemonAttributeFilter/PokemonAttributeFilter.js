import React, {Fragment} from 'react';
import './AttributeFilterStyling.css';
import {buttonClassName} from '../../pokemonBody/pokemonAttribute/PokemonAttribute';

const PokemonAttributeFilter = ({allAttributeFilters, onClickHandler}) => {
    return (
        <>
                {allAttributeFilters.map((attributeTerm) => {
                    console.log('attributeTerm', attributeTerm)
                    const colorClass = buttonClassName(attributeTerm)
                    return <button className={`attribute-button ${colorClass}`} onClick={()=>onClickHandler(attributeTerm)}>{attributeTerm}</button>
                })}
        </>
    )
}

export default PokemonAttributeFilter

