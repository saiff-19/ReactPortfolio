import React from "react";
import "../Styles/footer.scss";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };

  const linksBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };

  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          Connect Virtually
        </h1>

        <aside onMouseLeave={linksBackToNormal}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
          >
            Home
          </a>
          <a
            href="#about"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
          >
            About
          </a>
          <a
            href="#skills"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
          >
            Contact
          </a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto: saifspy000@gmail.com">saifspy000@gmail.com</a>
          <br />
          <a href="https://www.linkedin.com/in/saif-manzoor/" target="blank">
            <span style={{ color: "#0a66c2" }}>
              <b>LinkedIn </b>
              <FaLinkedin className="linkedin" />
            </span>
          </a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel: +918743804577">+91 87438 04577</a>
        </div>

        <p>© COPYRIGHT 2024 PORTFOLIO. MADE BY SAIF MANZOOR</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
