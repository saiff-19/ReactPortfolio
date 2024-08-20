import React from "react";
import "../Styles/loader.scss";
import logo from "../Assets/logoNew.png";
const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Loading..." />
    </div>
  );
};

export default Loader;
