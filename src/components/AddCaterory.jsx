import React, { useState } from "react";

//export const AddCaterory = ({setLista}) => {
    export const AddCaterory = ({onNewvalue}) => {
    
  const [buscar, setbuscar] = useState("");

  const cambioValor = (event) => {
    setbuscar(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(buscar.trim().length<=1) return;
    //setLista((categories) => [buscar,...categories]);
    onNewvalue(buscar.trim())
    setbuscar('');
  };
  return (
    <>
      <form onSubmit={ (event) => onSubmit(event)}>
        <input
          type="text"
          onChange={(event) => cambioValor(event)}
          value={buscar}
          placeholder="Buscar gifs"
        />
      </form>
    </>
  );
};
