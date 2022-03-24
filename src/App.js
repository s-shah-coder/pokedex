import React from "react";
import "./App.css";
import Logo from "./Logo";
import Bestpokemon from "./Bestpokemon";
import CaughtPokemon from "./CaughtPokemon";


const App = () => {
  const abilities = ["Anticipation", "Adaptibility", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
      <div>
      <Logo appName={"Saf's Pokedex"} />
      <Bestpokemon abilities={abilities} />;
      <CaughtPokemon date={date} />
    </div>
  );
};

export default App;
