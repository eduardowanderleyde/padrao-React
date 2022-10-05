import React from "react";

export default function Dados(props) {
  return (
    <section>
      g<p>Canal:{props.canal}</p>
      <p>Youtube:{props.youtube}</p>
      <p>Curso: {props.curso}</p>
    </section>
  );
}
