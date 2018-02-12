import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="projectContainer">
                <ul>
                    <li><Link className='footerLinks' to='/signup'>Register</Link></li>
                    <li><Link className='footerLinks' to='/login'>Log In</Link></li>
                </ul>
            </div>
        </div>
    )
}