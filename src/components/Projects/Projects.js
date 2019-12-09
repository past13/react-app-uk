import React from 'react';
import { ProjectsProvider } from './ProjectContext';
import ProjectList from './ProjectList';

export default function Projects() {

    return(
        <ProjectsProvider>
            <ProjectList />
        </ProjectsProvider>
    ) 
}