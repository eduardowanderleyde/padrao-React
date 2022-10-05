import React from "react";
import Logo from "./img/perfil.jpeg";

export default function Header() {
  return (
    <header>
      <img src={Logo} />
      <h1>Wanderlery cursos</h1>
    </header>
  );
}
