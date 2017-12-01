import React from 'react';
import './navBar.css';

export default function Nav() {

    return(
        <nav>
            <ul>
                <li className="navLi"><a className="navAnchor" href="#">Baby Sitter App</a></li>
                <li className="navLi"><a className="navAnchor" href="#">For Parents</a></li>
                <li className="navLi"><a className="navAnchor" href="#">For Sitters</a></li>
            </ul>
        </nav>
    )
}
