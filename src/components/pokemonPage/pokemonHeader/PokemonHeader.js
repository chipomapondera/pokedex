import React, {Fragment} from 'react';
import PokemonSearch from './pokemonSearch/PokemonSearch';
import PokemonAttributeFilter from './pokemonAttributeFilter/PokemonAttributeFilter';
import './HeaderStyling.css';


const PokemonHeader = ({allAttributeFilters, value, onChange}) => {
    const {grassButton, poisonButton, fireButton, flyingButton, waterButton, bugButton, normalButton, electricButton, groundButton, fairyButton} = allAttributeFilters
    return (
        <>
            <div className="site-header">
                <PokemonSearch value={value} onChange={onChange}/>
                <PokemonAttributeFilter 
                    grassButton={grassButton}
                    poisonButton={poisonButton}
                    fireButton={fireButton}
                    flyingButton={flyingButton}
                    waterButton={waterButton}
                    bugButton={bugButton}
                    normalButton={normalButton}
                    electricButton={electricButton}
                    groundButton={groundButton}
                    fairyButton={fairyButton}
                />
            </div>
        </>
    )
}

export default PokemonHeader
