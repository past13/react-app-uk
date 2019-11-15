import React, { useState, useEffect, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectsProvider = (props)  => {
  const  [hasError, setErrors] =  useState(false);
  const  [projects, setProjects ]= useState({});

  //post method for saving materials
 async function fetchData() {
      const res = await fetch("http://localhost:5000/projects/");
      res
        .json()
        .then(res => setProjects(res))
        .catch(err => setErrors(err));
    }

  useEffect(() => {
    fetchData();
  });

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
        {props.children}
    </ProjectContext.Provider>
  )
}
