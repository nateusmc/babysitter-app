import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

export default function Nav() {

    return(
        <div>
            <Link to="/"><img className="logo" src="../../photos/SitterFinder.png" alt="Sitter-Finder"/></Link>
        </div>
    )
}
