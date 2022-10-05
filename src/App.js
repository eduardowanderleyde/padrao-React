import React from "react";
import cafe from "./components/img/eu.png";

export default function App() {
  const canal = () => {
    return "CFB Cursos";
  };
  function curso() {
    return "Curso de React";
  }

  return (
    <section>
      <p>{"Canal:" + canal()}</p>

      <p>{curso()}</p>

      <img src={cafe} />
    </section>
  );
}
