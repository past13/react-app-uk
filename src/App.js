import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { NavigationBar } from './pages/NavigationBar';
import { Layout } from './pages/Layout';
import { Footer } from './pages/Footer';
import Notfound from './components/Notfound';

import Profile from './components/Login/Profile';
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';
import AddProject from './components/Projects/AddProject/AddProject';
import ProjectEdit from './components/Projects/EditProject/ProjectEdit';

import './App.css';

class App extends Component {
  render() {
    return (
        <div id="main-color">
          <NavigationBar />
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/projects" component={Projects} />
                <Route path="/profile" component={Profile} />
                <Route path="/submitProject" component={AddProject} />
                <Route path='/addProject' component={ProjectEdit} />
                <Route path='/project/:id' render={(id) => <ProjectEdit data={id} />} />
                <Route component={Notfound} />
              </Switch>
            </Router>
          </Layout>
          <Footer />
        </div>
    );
  }
}

export default App;
