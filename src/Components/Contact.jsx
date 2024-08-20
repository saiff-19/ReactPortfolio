import React, { useState } from "react";
import "../Styles/contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "72d219e3-f2ca-4896-a0e5-5f28fbb918c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSubmitted(true);
      event.target.reset();
    }
  };

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
      delay: 0.3,
    },
  };
  return (
    <div id="contact" className="contactContainer">
      <motion.h2 {...headingOptions}>Contact Me</motion.h2>
      {submitted && (
        <p className="submittedMessage">Message submitted successfully!</p>
      )}
      <motion.form {...imgOptions} onSubmit={onSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="JohnDoe"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Johndoe@gmail.com"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
