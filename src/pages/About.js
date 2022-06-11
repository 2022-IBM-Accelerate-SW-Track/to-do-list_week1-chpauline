import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Pauline Cheng</div>
            <div className="brief_description">
              I'm a computer science student at Oregon State University. A fun fact about me is that my favorite fruit is watermelon.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

