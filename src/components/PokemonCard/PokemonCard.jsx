import React, { useEffect, useState } from "react";
import { getPokemonData } from "../../overmind/effects";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

const PokemonCard = ({ item }) => {
  const [cardData, setCardData] = useState({});

  const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Pokemon Details</Popover.Title>
        <Popover.Content>
          Abilities:
          {cardData.abilities && cardData.abilities.map((item, i) => {
            return <p key={i}>{item.ability.name}</p>;
          })}
        </Popover.Content>
      </Popover>
    );
  
  useEffect(async () => {
    const data = await getPokemonData(item.url);
    setCardData(data);
    console.log("pokedata >", data);
  }, []);

  return (
    <OverlayTrigger trigger="click" placement="right-start" overlay={popover}>
      <div className="pokemonCard">
        <div className="pokemonCard__heading">
          <div className="pokemonCard__heading__imagePlaceholder">
            <img src="https://cache.desktopnexus.com/thumbseg/1327/1327833-bigthumbnail.jpg" />
          </div> 
          <h3 className="pokemonCard__heading__title">{item.name}</h3>
        </div>
        <ul className="pokemonCard__content">
          <li>Species : {cardData.species && cardData.species.name}</li>
          <li>Weight : {cardData.weight}</li>
        </ul>
      </div>
    </OverlayTrigger>
  );
};

export default PokemonCard;
