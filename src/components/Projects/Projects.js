import React from 'react';

import { ProjectsProvider } from '../ProjectContext';
import ProjectList from '../ProjectList';
import AddProject from './AddProject';

export default function Projects() {
    return(
        <main>
            <ProjectsProvider>
                <AddProject />
                <ProjectList />
            </ProjectsProvider>
        </main>
    ) 
}