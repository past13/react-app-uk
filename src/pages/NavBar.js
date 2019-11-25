import React from 'react';
import { Link } from 'react-router-dom'; 

export default function NavBar() {
    return (
        <nav>
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
        </nav>
    ) 
}
