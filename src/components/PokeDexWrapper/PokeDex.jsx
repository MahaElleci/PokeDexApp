import React, { useEffect } from "react"; 
import { useOvermind } from "../../overmind";
import PokemonCard from "../PokemonCard/PokemonCard"; 
import loader from "../../assets/loader.gif";
import "./styles.scss";

const PokeDex = () => {
  const { state, actions } = useOvermind();
  useEffect(() => {
    actions.loadApp();
  }, []); 

  return (
    <div className="pokeDex-wrapper container">
      <div className="pokeDex-wrapper__heading">
        <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" />
      </div>  

      {state.isLoading && <img className="loader" src={loader} />}
      <div className="pokeDex-wrapper__cards">  
          { state.pokemons.map((item, index) => {
            return <PokemonCard key={index} item={item} />;
          })} 
      </div>
    </div>
  );
};

export default PokeDex;
