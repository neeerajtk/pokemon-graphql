import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/getPokemons";

export function Pokemons() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });
  return (
    <div className="pokemons">
      {pokemons.map((pokemon: any) => (
        <p>{JSON.stringify(pokemon)}</p>
      ))}
    </div>
  );
}
