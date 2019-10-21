import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import PokemonHeader from './pokemonHeader/PokemonHeader';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({allPokemonInfo, allAttributeFilters}) => {
    const [userText, setUserText] = useState('')
    const [pokemonData, setPokemonData] = useState(allPokemonInfo)

    const updatePokemonData = debounce(() =>{
        if(userText) {
          const filterData = filter(allPokemonInfo, function(pokemon) { 
              const normalPokemonName = pokemon.pokemonName.toLowerCase()
              return normalPokemonName.includes(userText);
          })
          setPokemonData(filterData)
        }else {
          setPokemonData(allPokemonInfo)
        }   
    },250, { 'maxWait': 1000 })

    useEffect(()=>{
        updatePokemonData()
    },[userText])

    const attributeSelected = (attributeSelector) => {
        if(attributeSelector) {
            const filterData = filter(allPokemonInfo, function(pokemon) {
                return pokemon.pokemonAttributes.includes(attributeSelector);
            })
            console.log(filterData)
            setPokemonData(filterData)
        } 
    }

    const allButton = () => {
        setPokemonData(allPokemonInfo)
    }

    return (
        <>
            <PokemonHeader 
                allAttributeFilters={allAttributeFilters} 
                value={userText} 
                onChange={(e)=>setUserText(e.target.value)} 
                onClickHandler={attributeSelected}
                allOnClickHandler={allButton}
            />
            <PokemonBody allPokemonInfo={pokemonData} />
        </>
    )
}

export default PokemonPage


// import React, {Fragment, useState} from 'react';
// import PokemonHeader from './pokemonHeader/PokemonHeader';
// import PokemonBody from './pokemonBody/PokemonBody';

// const PokemonPage = ({allPokemonInfo, allAttributeFilters}) => {

//     const [userText, setUserText] = useState('')

//     const updateUserText = (event) => {
//         event.preventDefault();
    
//         setUserText(event.target.value);
//         console.log('this is the', userText)
//     }

//     return (
//         <>
//             <PokemonHeader
//                 allAttributeFilters={allAttributeFilters}
//                 value={userText} 
//                 onChange={updateUserText} 
//             />
//             <PokemonBody allPokemonInfo={allPokemonInfo} />
//         </>
//     )
// }

// export default PokemonPage

