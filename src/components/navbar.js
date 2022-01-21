import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
export default function NavBar() {
  return (
    <nav>
      <div className="info">
        <h1 className="name">Abhay Vishnoi</h1>
        <h4 className="title">Web Developer</h4>
        <p class="website">
          <FiGlobe className="globe" />
          <a href="abhayvishnoi.github.io">AV PROJECTS</a>
        </p>
      </div>
      <mybuttons>
        <a href="mailto:abhayvishnoi7@gmail.com">
          <button type="button" className="email">
            <MdEmail className="email-icon" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/abhay-vishnoi">
          <button type="button" className="linkedin">
            <FaLinkedin className="linkedin-icon" />
            LinkedIn
          </button>
        </a>
      </mybuttons>
    </nav>
  );
}
