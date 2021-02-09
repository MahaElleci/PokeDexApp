import React, { useEffect, useState } from "react";
import { useOvermind } from "../../overmind";
import {
  Popover,
  OverlayTrigger,
  Accordion,
  Card,
  NavLink,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

const PokemonCard = ({ item }) => {
  const [cardSelected, setCardSelected] = useState(false);
  const { state, actions } = useOvermind();
  const { selectedPokemon } = state;
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Pokemon Details</Popover.Title>
      <Popover.Content>
        <div className="details-section">
          <p>Types: </p>
          <ul>
            {selectedPokemon.types &&
              selectedPokemon.types.map((item, i) => {
                return <li key={i}>{item.type.name} </li>;
              })}
          </ul>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
            See More
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div className="details-section">
              <p>Stats: </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Base Stat</th>
                    <th>Effort</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPokemon.stats &&
                    selectedPokemon.stats.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{item.base_stat}</td>
                          <td>{item.effort}</td>
                          <td>{item.stat.name}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </Popover.Content>
    </Popover>
  );

  useEffect(() => {
    if (cardSelected) {
      actions.setSelectedPokedata(item.url);
    }
  }, [cardSelected]);

  return (
    <OverlayTrigger
      onToggle={() => setCardSelected(true)}
      trigger="click"
      placement="right-start"
      overlay={popover}
      rootClose
    >
      <div className="pokemonCard">
        <div className="pokemonCard__heading">
          <div className="pokemonCard__heading__imagePlaceholder">
            <img src="https://cache.desktopnexus.com/thumbseg/1327/1327833-bigthumbnail.jpg" />
          </div>
          <h3 className="pokemonCard__heading__title">{item.name}</h3>
        </div>
      </div>
    </OverlayTrigger>
  );
};

export default PokemonCard;
