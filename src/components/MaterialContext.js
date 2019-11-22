import React, { useState, useEffect, createContext } from "react";

export const MaterialContext = createContext();

export const MaterialsProvider = (props)  => {
  const  [hasError, setErrors] =  useState(false);
  const  [materials, setMaterials ]= useState({});

 async function fetchData() {
        //todo: move to service
      const res = await fetch("http://localhost:5000/materials/");
      res
        .json()
        .then(res => setMaterials(res))
        .catch(err => setErrors(err));
    }

  useEffect(() => {
    fetchData();
  });

  return (
    <MaterialContext.Provider value={[materials, setMaterials]}>
        {props.children}
    </MaterialContext.Provider>
  )
}
