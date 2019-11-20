import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { ProjectContext } from './ProjectContext';
import axios from 'axios';

const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/projects/${id}`, {
    }).then((response) => {
        console.log('deleted',response)
    }).catch((error) => {
        console.log(error)
    })
}

const ProjectList = () => {
    const [projectsContext] = useContext(ProjectContext);
    const projectList = Array.from(projectsContext);

    return (
        <div>
            {projectList === null ? (
                <div>Loading projects ...</div>
            ) : (
                <div>
                     {projectList.map((item) => (
                        <li key={item._id}>
                        <Link to={{ pathname: '/project/' + item._id}}>
                            {item.name}
                        </Link>
                            <button onClick={deleteUser.bind(this, item._id)}>Delete</button>
                        </li>
                    ))} 
                </div>
            )}
        </div>
    );
}

export default ProjectList;