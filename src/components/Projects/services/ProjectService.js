import axios from 'axios';

export default class ProjectService {

  getPorjects = async () => {
    try {
      return (await fetch(`http://localhost:5000/projects/`));
    }
    catch (error) {
      console.log(error);
    }
  }

  getProjectById = async (projectId) => {
    try {
      return (await fetch(`http://localhost:5000/projects/${projectId}`)).json();
    }
    catch (error) {
      console.log(error);
    }
  }

  addProject = async (project) => {
    try {
      return await axios.post(`http://localhost:5000/projects/`, project, {});
    }
    catch (error) {
      console.log(error);
    }
  };

  updateProject = async (project) => {
    const { id } = project;
    try {
      return await axios.put(`http://localhost:5000/projects/${id}`, project, {});
    }
    catch (error) {
      console.log(error);
    }
  };

  deleteProject = async (id) => {
    try {
      return await axios.delete(`http://localhost:5000/projects/${id}`, {});
    }
    catch (error) {
      console.log(error);
    }
  }

  filterProjects = async (filter) => {
    try {
      return await axios.post(`http://localhost:5000/filterProjects/`, filter, {});
    }
    catch (error) {
      console.log(error);
    }
  }
}
