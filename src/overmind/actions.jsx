export const loadApp = async ({ effects, state }) => {
  state.isLoading = true;
  state.pokemons = await effects.getPokemons();
  state.isLoading = false;
};
export const setSelectedPokedata = async ({ effects, state }, url) => { 
  state.isLoading = true;
  state.selectedPokemon = await effects.getPokemonData(url); 
  state.isLoading = false;
}; 
export const setCachedPokemon = async ({ state }, cachedPokemon) => { 
   state.selectedPokemon = JSON.parse(cachedPokemon);
 };
