import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import PokemonHeader from './pokemonHeader/PokemonHeader';
import PokemonBody from './pokemonBody/PokemonBody';

const PokemonPage = ({allPokemonInfo, allAttributeFilters}) => {
    const [userText, setUserText] = useState('')
    const [pokemonData, setPokemonData] = useState(allPokemonInfo)
    
    const upodatePokemonData = debounce(() =>{
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
        upodatePokemonData()
    },[userText])

    return (
        <>
            <PokemonHeader allAttributeFilters={allAttributeFilters} value={userText} onChange={(e)=>setUserText(e.target.value)} />
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

