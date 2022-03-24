
import React from "react";


const Bestpokemon = (props) => {


  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>;
        <ul>
          {props.abilities.map((ability) => {
            return <li key={ability}>{ability}</li>;
          })}
        </ul>
    </div>
  );
};

export default Bestpokemon;