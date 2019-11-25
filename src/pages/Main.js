import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Notfound from '../components/Notfound';
import Home from '../components/Home';

import Projects from '../components/Projects/Projects';
import ProjectDetail from '../components/Projects/ProjectDetail';

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => <Home />}/>
                <Route path="/addProject" render={() => <Projects />}/>
                <Route path="/logaut" render={() => <div>Logout</div>}/>
                <Route path="/profile" render={() => <div>Profile</div>}/>
                <Route path='/project/:id' render={(id) => <ProjectDetail id={id} />} />
                <Route render={() => <Notfound />} />
            </Switch>
        </main>
    )
}