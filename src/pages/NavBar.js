import React from 'react';
import { Link } from 'react-router-dom'; 

import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navigationContainer">
            <ul>
                <li>
                    <Link to="/addProjectTest">addProjectTest</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addProject">Add Project</Link>
                </li>
                <li>
                    <Link to="/logaut">Logout</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    ) 
}
