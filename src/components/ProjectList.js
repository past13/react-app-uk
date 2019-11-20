import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { ProjectContext } from './ProjectContext';

const ProjectList = () => {
    const [projectsContext] = useContext(ProjectContext);
    const projectList = Array.from(projectsContext);

    return (
        <div>
            {projectList.map((item) => (
                <li key={item._id}>
                <Link to={{ pathname: '/project/' + item._id}}>
                    {item.name}
                </Link>
                </li>
            ))}
            {/* {projectList.map((item) => {           
                return (                
                    <ProjectDetail key={item._id} project={item} />   
                )
            })} */}
        </div>
    );
}

export default ProjectList;