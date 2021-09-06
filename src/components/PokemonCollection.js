import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokeCollection = pokemon.map(poke => <PokemonCard key={poke.id} poke={poke}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCollection}
    </Card.Group>
  );
}

export default PokemonCollection;
