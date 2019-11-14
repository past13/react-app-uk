import React, { useState, useEffect, createContext } from "react";

export const LocationContext = createContext();

export const LocationsProvider = (props)  => {
  const  [hasError, setErrors] =  useState(false);
  const  [locations, setPlanets ]= useState({});


 async function fetchData() {
      const res = await fetch("http://localhost:5000/locations/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

  useEffect(() => {
    fetchData();
  });

  return (
    <LocationContext.Provider value={[locations, setPlanets]}>
        {props.children}
    </LocationContext.Provider>
  )
}
