import React, { useEffect, useState } from "react";
import { getPokemonData } from "../../overmind/effects";
import "./styles.scss";

const PokemonCard = ({ item }) => {
  const [cardData, setCardData] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  useEffect(async () => {
    const data = await getPokemonData(item.url);
    setCardData(data);
  }, [cardData]);


  const handleMouseHover = () => {
    setIsHovering(!isHovering);
  };
  return (
    <div
      onMouseEnter={() => handleMouseHover()}
      onMouseLeave={() => handleMouseHover()}
      className="pokemonCard"
    >
      <div className="pokemonCard__heading">
        <div className="imagePlaceholder">
          <img src="https://cache.desktopnexus.com/thumbseg/1327/1327833-bigthumbnail.jpg" />
          <h3>{item.name}</h3>
        </div>
      </div>
      <ul className="pokemonCard__content">
        <li>Species : {cardData.species && cardData.species.name}</li>
        <li>Weight : {cardData.weight}</li>
      </ul>
    </div>
  );
};

export default PokemonCard;
