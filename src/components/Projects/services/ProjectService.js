import React from 'react';
import axios from 'axios';

export default class ProjectService {
  addProject = async (project) => {
    try {
      return await axios.post('http://localhost:5000/projects/', project, {});
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
}
