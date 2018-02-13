import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="projectContainer">

                    <li className="signups"><Link className='footerLinks btn' to='/signup'>Signup</Link></li>
                    <li><Link className='footerLinks btn' to='/login'>Log In</Link></li>

            </div>
        </div>
    )
}
