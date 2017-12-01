import React from 'react';
import './footer.css';

export default function Footer() {

    return(
        <nav class="navContainer">
            <ul>
                <li className="footerLi"><a className="footerAnchor" href="#">About</a></li>
                <li className="footerLi"><a className="footerAnchor" href="#">Terms and Conditions</a></li>
                <li className="footerLi"><a className="footerAnchor" href="#">Privacy Policy</a></li>
            </ul>
        </nav>
    )
}
