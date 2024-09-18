import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/About.js" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/Contact" className="nav-link">Contact</Link>
                </li>
                <li>
                    <Link to="/Counter" className="nav-link">Counter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
