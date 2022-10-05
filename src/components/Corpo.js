import React from "react";
import Dados from "./Dados";

export default function Corpo() {
  const cnl = "Wanderley ";
  const yt = "youtube.com/wanderleycursos";
  const crs = "React.js";
  return (
    <section>
      <h2>Curso de React: </h2>
      <p>Se inscreva em nosso canal</p>
      <p>Ative o sininho e clique no sininho</p>
      <Dados canal={cnl} youtube={yt} curso={crs} />
    </section>
  );
}
