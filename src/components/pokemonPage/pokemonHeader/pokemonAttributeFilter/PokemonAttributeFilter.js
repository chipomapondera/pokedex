import React from 'react';
import './AttributeFilterStyling.css';

const PokemonAttributeFilter = ({grassButton, poisonButton, fireButton, flyingButton, waterButton, bugButton, normalButton, electricButton, groundButton, fairyButton}) => {

    return (
        <div className="attribute-filter"> 
            <button className="attribute-button">{grassButton}</button>
            <button className="attribute-button">{poisonButton}</button>
            <button className="attribute-button">{fireButton}</button>
            <button className="attribute-button">{flyingButton}</button>
            <button className="attribute-button">{waterButton}</button>
            <button className="attribute-button">{bugButton}</button>
            <button className="attribute-button">{normalButton}</button>
            <button className="attribute-button">{electricButton}</button>
            <button className="attribute-button">{groundButton}</button>
            <button className="attribute-button">{fairyButton}</button>
        </div>
    )
}

export default PokemonAttributeFilter

