import React, { useState } from "react";
import { AddCaterory } from "./components/AddCaterory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [lista, setLista] = useState(["One punch"]);

  const onAddCategory = (value) => {
    if (lista.includes(value)) return;
    setLista([value, ...lista]);
  };
  return (
    <>
      <h3> GifExpertApp </h3>

      {/* <AddCaterory setLista={setLista} /> */}
      <AddCaterory onNewvalue={(event) => onAddCategory(event)} />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {lista.map((category) => (
         <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};
