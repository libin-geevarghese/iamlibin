import React from "react";
import "./introduction.css";
import profilePic from "../Public/profilepic.jpeg";
import mernLogo from "../Public/mern.png";
import reactNativeLogo from "../Public/reactnative.png";
import iosLogo from "../Public/ios.png";
import androidLogo from "../Public/android.png";
import awsLogo from "../Public/aws.png";

import SendIcon from "@mui/icons-material/Send";

import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

function Introduction() {
  return (
    <div className="conatainer-main">
      <div className="container-sub">
        <div className="intro-container">
          <h1>Hello,</h1>
          <h2>I am Libin Geevarghese,</h2>
          <p className="label-stacks">
            Full Stack Developer || MobileDeveloper
          </p>

          <div className="logos-stacks">
            <img
              id="mernLogo"
              className="logos"
              src={mernLogo}
              alt="mern"
            ></img>
            <span>
              <img id="iosLogo" className="logos" src={iosLogo} alt="ios"></img>
              <img
                id="androidLogo"
                className="logos"
                src={androidLogo}
                alt="android"
              ></img>
              <img
                id="reactNativeLogo"
                className="logos"
                src={reactNativeLogo}
                alt="react native"
              ></img>
              <img id="awsLogo" className="logos" src={awsLogo} alt="aws"></img>
            </span>
          </div>
        </div>
        <div className="photo-container">
          <img id="profilePic" src={profilePic} alt="profile" />
        </div>
      </div>

      <div className="messageContainer">
        <textarea
          id="message-textarea"
          placeholder="Send me a message..."
        ></textarea>
        <p className="muIcon">
          <IconButton>
            <SendIcon />
          </IconButton>
        </p>
      </div>

      <div className="container-bottom">
        <Link to="about">
          <button id="about-button">know more about me</button>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
