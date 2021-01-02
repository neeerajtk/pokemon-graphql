import React from "react";
import "../styles/pokemon.css";

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
    <div className="pokemonSingle">
      <p>
        {" "}
        <img src={props.pokemon.image} />
      </p>
      <p>Name: {props.pokemon.name}</p>

      <p>Max HP: {props.pokemon.maxHP}</p>
      <p>Max CP: {props.pokemon.maxCP}</p>
    </div>
  );
}
