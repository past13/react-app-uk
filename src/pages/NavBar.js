import React from 'react';
import { Link } from 'react-router-dom'; 

import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navigationContainer">
            <ul>
                <li>
                    <Link to="/addProject">Add project</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    ) 
}
