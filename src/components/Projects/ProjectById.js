import React from 'react';
import { ProjectsProvider } from '../ProjectContext';
import ProjectDetail from './ProjectDetail';

const ProjectById = () => {

    return (
        <ProjectsProvider>
            <ProjectDetail />
        </ProjectsProvider>
    );
}

export default ProjectById;

