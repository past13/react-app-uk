import React, { useContext, useState} from 'react';
import axios from 'axios';
import { ProjectContext } from './ProjectContext';

const ProjectList = () => {
    const [projectsContext] = useContext(ProjectContext);
    const projectList = Array.from(projectsContext);

    const deleteUser = (id) => {
        // const result = projectList.filter(project => project._id === id);
        axios.delete(`http://localhost:5000/projects/${id}`, {
            // body: project
        }).then((response) => {
              console.log('deleted',response)
        }).catch((error) => {
            console.log(error)
        })
        // setProjects(result);
    }

    return (
        <div>

            {projectList.map((item) => {
                return (
                    <div key={item._id}>
                        <div>{item.name}</div>
                        <button onClick={deleteUser.bind(this, item._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectList;