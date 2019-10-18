import React from 'react';
import './AttributeFilterStyling.css';
import {buttonClassName} from '../../pokemonBody/pokemonAttribute/PokemonAttribute';

// const attributeFilterClass = (attributeTerm) => {
//     const lowerAttributeName = attributeTerm.toLowerCase()
//     return `attribute-button-${lowerAttributeName}`
// }

const PokemonAttributeFilter = ({allAttributeFilters}) => {
    return (
        <div className="attribute-filter"> 
                {allAttributeFilters.map((attributeTerm) => {
                    console.log('attributeTerm', attributeTerm)
                    const colorClass = buttonClassName(attributeTerm)
                    return <button className={`attribute-button ${colorClass}`}>{attributeTerm}</button>
                })}
        </div>
    )
}

export default PokemonAttributeFilter

