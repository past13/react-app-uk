import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Notfound from '../components/Notfound';
import Home from '../components/Home';

import Projects from '../components/Projects/Projects';
import ProjectDetail from '../components/Projects/ProjectDetail';
import AddProjectTest from '../components/Projects/AddProject/AddProjectTest';

import './Main.css';

export default function Main() {
    return (
        <main className="contentContainer">
            <Switch>
                <Route exact path="/" render={() => <Home />}/>
                <Route path="/addProject" render={() => <Projects />}/>
                <Route path="/addProjectTest" render={() => <AddProjectTest />}/>
                <Route path="/logaut" render={() => <div>Logout</div>}/>
                <Route path="/profile" render={() => <div>Profile</div>}/>
                <Route path='/project/:id' render={(id) => <ProjectDetail id={id} />} />
                <Route render={() => <Notfound />} />
            </Switch>
        </main>
    )
}