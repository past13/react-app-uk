import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { ProjectContext } from './ProjectContext';

import ProjectService from './Projects/services/ProjectService';

const ProjectList = () => {
    const [projectsContext, setProject] = useContext(ProjectContext);
    const projectList = Array.from(projectsContext);

    const deleteUser = async (id) => {
        const service = new ProjectService();
        const result = await service.deleteProject(id);

        if (result.status === 200) {
            const newProjectList = projectList.filter(project => project._id !== id);
            setProject(newProjectList);

            const div = document.getElementById('deletedResult');
            div.innerHTML = 'Deleted'
        }
    }

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
            <div id="deletedResult"></div>
        </div>
    );
}

export default ProjectList;