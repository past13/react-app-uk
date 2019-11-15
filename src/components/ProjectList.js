import React, { useContext} from 'react';
import { ProjectContext } from './ProjectContext';

const ProjectList = () => {
    const [projects] = useContext(ProjectContext);
    const projectList = Array.from(projects);
    return (
        <div>
            {projectList.map((item) => {
                return <div key={item._id}>{item.name}</div>
            })}
        </div>
    );
}

export default ProjectList;