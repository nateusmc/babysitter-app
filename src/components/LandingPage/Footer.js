import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-section">
        <div className="project-container">
          <div>
            <p className="footer-category">Project</p>
            <ul>
              <li>
                <a
                  className="link-to-github footer-links"
                  href="https://github.com/nateusmc/babysitter-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client
                </a>
              </li>
              <li>
                <a
                  className="link-to-github footer-links"
                  href="https://github.com/nateusmc/babysitter-app-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Server
                </a>
              </li>
              <li>
                <Link className="footer-links" to="/signup">
                  Register
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/login">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-us-container">
          <div>
            <p className="footer-category">About Us</p>
            <ul>
              <li>
                <a
                  className="link-to-portfolio footer-links"
                  href="http://www.adambradbury.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adam Bradbury
                </a>
              </li>
              <li>
                <a
                  className="link-to-portfolio footer-links"
                  href="http://www.nathanpaulgarrett.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nathan Garrett
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright 2018</p>
    </div>
  );
}
