import React from "react";
import "../Styles/about.scss";
import { motion } from "framer-motion";
import aboutImage from "../Assets/aboutSection2.png";

const About = () => {
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
      delay: 0.1,
    },
  };
  return (
    <div id="about" className="aboutContainer">
      <motion.h2 {...headingOptions}>About Me</motion.h2>
      <div className="aboutImg">
        <motion.img {...imgOptions} src={aboutImage} alt="aboutImage" />
      </div>
      <div className="aboutText">
        <motion.p {...imgOptions}>
          As a tech geek, I am passionate about harnessing the power of
          technology to create impactful solutions. My journey in web
          development began with learning the fundamentals of HTML, CSS, and
          JavaScript, which I have honed through practical experience.
          <br />
          <br />
          My career goal is to become an exceptional web developer, continuously
          pushing the boundaries of what is possible on the web. I am driven by
          a relentless pursuit of excellence and a desire to be at the forefront
          of web development innovation.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
