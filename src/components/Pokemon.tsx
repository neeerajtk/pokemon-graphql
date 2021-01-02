import React from "react";

type pokemonType = {
  id: any;
  name: any;
  image: any;
  maxHP: any;
  maxCP: any;
  attacks: any;
};

interface Props {
  pokemon: pokemonType;
  id: any;
}

export default function Pokemon(props: Props) {
  return (
    <div>
      <p>{props.pokemon.name}</p>
    </div>
  );
}
