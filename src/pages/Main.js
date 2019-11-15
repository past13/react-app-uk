import React from 'react';
// import MovieList from './MovieList';
// import { MovieProvider } from './MovieContext';
// import AddMovie from './AddMovie';
// import LocationList from './LocationList';
// import { LocationsProvider } from '../components/LocationContext';
// import AddLocation from '../components/AddLocation';
// import MaterialList from '../components/MaterialList';

import { ProjectsProvider } from './../components/ProjectContext';
import ProjectList from './../components/ProjectList';

export default function Main() {

    return(
        <main>
            <ProjectsProvider>
                <ProjectList />
            </ProjectsProvider>
          
            {/* <ProjectsProvider>
                <ProjectList />
            </ProjectsProvider> */}
            {/* <MovieProvider>
            <div className="App">
                <AddMovie />
                <MovieList />       
            </div>
            </MovieProvider>
            <MaterialsProvider>
            <AddMaterial />
            <MaterialList />
            </MaterialsProvider>
            <LocationsProvider>
            <AddLocation />
            <LocationList />
            </LocationsProvider> */}
        </main>
    ) 
}