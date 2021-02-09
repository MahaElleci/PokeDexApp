import { createOvermindMock } from "overmind";
import { config } from "./";

describe("State", () => {
  it("should derive pokemons", async () => {
    const overmind = createOvermindMock(config, (state) => {
      state.pokemons = [{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      }];
    });
    expect(overmind.state.pokemons).toEqual([{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      }]);
  });
});
