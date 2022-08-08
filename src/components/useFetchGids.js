import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGids = (category) => {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(true)
  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setloading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading: loading,
  };
};
