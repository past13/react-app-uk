import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Notfound from '../components/Notfound';
import Home from '../components/Home';

import Projects from '../components/Projects/Projects';
import ProjectDetail from '../components/Projects/ProjectDetail';
import AddProject from '../components/Projects/AddProject/AddProject';

import Profile from '../components/Login/Profile';
import Login from '../components/Login/Login';

import './Main.css';

export default function Main() {
    return (
        <main className="contentContainer">
            <Switch>
                <Route exact path="/" render={() => <Home />}/>
                <Route path="/login" render={() => <Login />}/>

                <Route path="/addProject" render={() => <AddProject />}/>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/projects" render={() => <Projects />}/>
                
                <Route path='/project/:id' render={(id) => <ProjectDetail id={id} />} />
                <Route render={() => <Notfound />} />
            </Switch>
        </main>
    )
}