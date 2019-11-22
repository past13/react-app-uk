import React, { useState, useEffect, createContext } from "react";
import ProjectService from './Projects/services/ProjectService';
export const ProjectContext = createContext();

export const ProjectsProvider = (props)  => {
  const  [setErrors] =  useState(false);
  const  [projects, setProjects ]= useState({});
  const service = new ProjectService();


 async function fetchData() {
      const projects = await service.getPorjects();
      projects
      .json()
        .then(res => setProjects(res))
        .catch(err => setErrors(err));
    }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
        {props.children}
    </ProjectContext.Provider>
  )
}
