import React, { useState } from "react";
import logo from "../Assets/logoNew.png";
import heroImage from "../Assets/hero.png";
import "../Styles/header.scss";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="heroContainer">
      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="Logo" data-cursorpointer={true} />
        </a>
        <div
          className={`menu-icon ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu ${isSidebarOpen ? "open" : ""}`}>
          <a className="links" href="#about">
            About
          </a>
          <a className="links" href="#skills">
            Skills
          </a>
          <a className="links" href="#projects">
            Projects
          </a>
          <a className="links" href="#contact">
            Hire Me
          </a>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-menu">
          <a className="links" href="#about" onClick={toggleSidebar}>
            About
          </a>
          <a className="links" href="#skills" onClick={toggleSidebar}>
            Skills
          </a>
          <a className="links" href="#projects" onClick={toggleSidebar}>
            Projects
          </a>
          <a className="links" href="#contact" onClick={toggleSidebar}>
            Hire Me
          </a>
        </div>
      </div>
      <div className="heroSection">
        <div className="heroText">
          <h2>Hey, I'm Saif Manzoor</h2>
          <p>
            I'm a passionate frontend developer with a knack for creating
            visually stunning and highly functional web applications. I strive
            to blend design with technology to deliver seamless user
            experiences, always pushing the boundaries of what's possible in web
            development.
          </p>
          <a
            href="https://drive.google.com/file/d/1kF1uErlwiKttDUUAnPy6smE0hdGdZqL6/view"
            target="blank"
          >
            <button>My Resume</button>
          </a>
        </div>
        <div className="heroImg">
          <img src={heroImage} alt="heroimage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
