import React from 'react';
import { useState }  from '../../overmind'; 
import { SERIALIZE } from 'overmind';
import PokemonCard from '../PokemonCard/PokemonCard'  

const PokeDex  = () => {
    const  state   = useState(); 
    console.log("state", JSON.parse(JSON.stringify(state)));
    return (
        <div>
            {/* {state.pokemons.map((item, index) => {
                return <PokemonCard key={index} title={item.title}/>
            })} */}
        </div>
    )
    
};

export default PokeDex ;