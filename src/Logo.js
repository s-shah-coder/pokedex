import React from "react";

const Logo = (props) => {
  //  const appName = "Saf Shah's Pokedex";
  return (
    <header>
    <h1>Welcome to {props.appName}</h1>
    <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"} alt={"a pokemon"} />
  </header>
  );
};

export default Logo;