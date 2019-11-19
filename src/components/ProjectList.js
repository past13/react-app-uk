import React, { useContext, useState} from 'react';
import { ProjectContext } from './ProjectContext';

const ProjectList = () => {
    // const [projectsContext] = useContext(ProjectContext);
    // const projectList = Array.from(projectsContext);
    
    // const [projects, setProjects] = useState(projectsContext);

    const deleteUser = (id) => {
        // const result = projectList.filter(project => project._id !== id);
        // setProjects(result);
    }

    return (
        <div>
            {/* {projectList.map((item) => {
                return (
                    <div key={item._id}>
                        <div>{item.name}</div>
                        <button onClick={deleteUser.bind(this, item._id)}>Delete</button>
                    </div>
                )
            })} */}
        </div>
    );
}

export default ProjectList;