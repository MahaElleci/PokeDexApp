export const loadApp = async ({effects, state}) =>{   
   state.isLoading = true;
   state.pokemons = await effects.getPokemons(); 
   state.isLoading = false;
}  
