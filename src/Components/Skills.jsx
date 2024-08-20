import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiDjango, SiC } from "react-icons/si";
import "../Styles/skill.scss";

const Skills = () => {
  const headingOptions = {
    initial: {
      y: "-120%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
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
  return (
    <div id="skills" className="skillsContainer">
      <motion.h2 {...headingOptions}>My Skills</motion.h2>

      <motion.div {...textOptions} className="skillsSection">
        <h3>Languages</h3>
        <div className="skillsList">
          <div className="skillItem">
            <FaHtml5 className="skillIcon" />
            <span>HTML</span>
          </div>
          <div className="skillItem">
            <FaCss3Alt className="skillIcon" />
            <span>CSS</span>
          </div>
          <div className="skillItem">
            <FaJsSquare className="skillIcon" />
            <span>JavaScript</span>
          </div>
          <div className="skillItem">
            <FaPython className="skillIcon" />
            <span>Python</span>
          </div>
          <div className="skillItem">
            <SiC className="skillIcon" />
            <span>C</span>
          </div>
        </div>
      </motion.div>

      <motion.div {...textOptions} className="skillsSection">
        <h3>Frameworks & Libraries</h3>
        <div className="skillsList">
          <div className="skillItem">
            <FaReact className="skillIcon" />
            <span>React.js</span>
          </div>
          <div className="skillItem">
            <SiDjango className="skillIcon" />
            <span>Django</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
