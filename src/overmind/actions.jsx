export const loadApp = async ({ effects, state }) => {
  state.isLoading = true;
  state.pokemons = await effects.getPokemons();
  state.isLoading = false;
};
export const setSelectedPokedata = async ({ effects, state }, url) => {
  state.selectedPokemon = await effects.getPokemonData(url);
};
