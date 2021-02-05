import axios from 'axios'

 export const getPokemons = async () => { 
        const response =  await axios.get('https://pokeapi.co/api/v2/pokemon'); 
       return response.data.results;
} 

export const getPokemonData = async (url) => { 
    const response =  await axios.get(url); 
    return response.data;
} 

