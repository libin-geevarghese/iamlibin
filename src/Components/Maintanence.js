import React from "react";
import "./Maintanence.css";
import maintanenceImage from "../Public/maintanence.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Maintanence() {
  return (
    <div id="main-container">
      <p id="stayTuned">Stay tuned, Something nice will be here...</p>
      <div className="img-container">
        <img id="maintenance-image" src={maintanenceImage} alt="Maintenance" />
      </div>

      <p className="contacts-container">
        If you have any queries or concerns in the meantime, please feel free to
        reach me.
      </p>

      <div className="contacts-container">
        <a
          className="App-link"
          href="mailto:libin@iamlibin.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="social-icon-wrapper">
            <EmailIcon /> libin@iamlibin.in
          </p>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/libingeeva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="social-icon-wrapper">
            <LinkedInIcon /> linkedin.com/in/libingeeva
          </p>
        </a>

        <a
          className="App-link"
          href="https://github.com/libin-geevarghese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="social-icon-wrapper">
            <GitHubIcon /> github.com/libin-geevarghese
          </p>
        </a>

        <a
          className="App-link"
          href="https://www.instagram.com/fly_with_flynn_rider/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="social-icon-wrapper">
            <InstagramIcon /> instagram.com/fly_with_flynn_rider
          </p>
        </a>
      </div>
      <Link to="/">
        <button id="back-button">Go Back to Home</button>
      </Link>
    </div>
  );
}

export default Maintanence;
