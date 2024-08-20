import React from "react";
import "../Styles/project.scss";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Amazon Clone: (HTML,CSS)",
    image: "amazonclone.png",
    description:
      "This project is a simplified static clone of the Amazon.com website created using HTML and CSS. It serves as a learning exercise to understand the structure and styling of a modern e-commerce website.",
    url: "https://github.com/saiff-19/Amazon-Clone",
  },
  {
    id: 2,
    title: "Sachnm Mngr: (Django,HTML,CSS,JS)",
    image: "sachnm.png",
    description:
      "Sachnm Mngr is a web app that helps students easily track and manage their class attendance. Its user-friendly interface simplifies monitoring, ensuring students stay organized and focused on their studies.",
    url: "https://github.com/saiff-19/Sachnm-Manager",
  },
  {
    id: 3,
    title: "Bank Management: (Python,MySQL)",
    image: "mysql.png",
    description:
      "The Bank Management System is a Python app that stores and retrieves bank-related data using MySQL. It enables users to input customer information and perform basic bank management operations.",
    url: "https://github.com/saiff-19/Bank-Management",
  },
];

const Project = () => {
  const textOptions = {
    initial: {
      y: "-80%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
    },
  };
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };
  return (
    <div id="projects" className="projectContainer">
      <motion.h2 {...imgOptions}>My Projects</motion.h2>
      <div className="projectCards">
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            <img
              src={require(`../Assets/${project.image}`)}
              alt={project.title}
              className="projectImage"
            />
            <div className="projectDetails">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="blank">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <motion.h4 {...textOptions}>More Projects Coming Soon...</motion.h4>
    </div>
  );
};

export default Project;
