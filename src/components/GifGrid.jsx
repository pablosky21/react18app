import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGids } from "./useFetchGids";

export const GifGrid = ({ category }) => {
 
  const {images,isLoading} = useFetchGids(category);

  

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ?  <h2>Cargando...</h2>: null
      }
     
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} img={img}/>
         
        ))}
      </div>
    </>
  );
};
