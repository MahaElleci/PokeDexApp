export const dataPlaceholder = {
    getPokemons : async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon'); 
        return new Promise((resolve) => {
            resolve(response)
        });
    } 

} 
