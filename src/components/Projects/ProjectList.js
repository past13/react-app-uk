import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { ProjectContext } from './ProjectContext';

import ProjectService from './services/ProjectService';
import { ProjectItem } from './ProjectItem/ProjectItem';

import trashicon from './../../assets/trash-icon.png';

import styled from 'styled-components';
const Styles = styled.div`
    li {
        list-style-type: none; 
    }

    li a {
        text-decoration: none;
    }

    .filter-project-input {
        border: none; 
        border-radius: 5px; 
        width: 410px; 
        border: none; 
        outline: none; 
        background: rgb(219, 218, 218); 
        font-size: 14px; 
        font-family: 'Lato', 'sans-serif'; 
        color: black; 
        padding: 10px;
    }
    
`;

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
        <Styles>
            <div>
                {projectList === null ? (
                    <div>Loading projects ...</div>
                ) : (
                    <ul>
                        <input className="filter-project-input" type="text" placeholder="Search" /> 
                        {projectList.map((item) => (
                            <li key={item._id}>
                                <Link to={{ pathname: '/project/' + item._id}}>
                                    <ProjectItem item={item}/>
                                </Link>
                                <button className="delete-project" onClick={deleteUser.bind(this, item._id)}>
                                    <img src={trashicon} width="10" height="10" alt="submit" />
                                </button>
                            </li>
                        ))} 
                    </ul>
                )}
                <div id="deletedResult"></div>
            </div>
        </Styles>
    );
}

export default ProjectList;