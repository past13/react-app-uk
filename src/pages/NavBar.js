import React, { Fragment } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'; 
import Notfound from '../components/Notfound';
import Home from '../components/Home';

export default function NavBar() {

    return(
        <nav>
            <BrowserRouter>
                <Fragment>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/yourlist">Your list</Link>
                        </li>
                        <li>
                            <Link to="/logaut">Logout</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" render={() => <Home />}/>
                        <Route exact path="/yourlist" render={() => <div>Yourlist</div> }/>
                        <Route exact path="/logaut" render={() => <div>Logaut</div> }/>
                        <Route exact path="/profile" render={() => <div>Profile</div> }/>
                      
                        <Route render={() => <Notfound />} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </nav>
    ) 
}