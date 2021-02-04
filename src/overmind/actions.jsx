export const loadApp = ({effects, state}) =>{  
   state.isLoading = true;
   state.pokemons = effects.dataPlaceholder.getPokemons(); 
   state.isLoading = false;
}