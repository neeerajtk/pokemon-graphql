import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/getPokemons";
import Pokemon from "../components/Pokemon";

export function Pokemons() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 5 },
  });
  return (
    <div className="pokemons">
      {pokemons.map((pokemon: any) => (
        <Pokemon pokemon={pokemon} id={pokemon.id} />
      ))}
    </div>
  );
}
