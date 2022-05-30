import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/landing.scss";

const Landing: React.FunctionComponent = () => {
  return (
    <div className="Landing-container">
      <div className="Landing-container__greeting">
        <span>
          <p>Hi there fellow human! Welcome to</p>
        </span>
      </div>
      <div className="Landing-container__name">
        <span className="Landing-container__name__fullname">
          <h1>angus_hon</h1>
        </span>
        <span className="Landing-container__name__at">
          <h1>@</h1>
        </span>
        <span className="Landing-container__name__title">
          <h1>website</h1>
        </span>
      </div>
      <nav className="Landing-container__nav">
        <span>
          <a>~$</a>
        </span>
        <span>
          <Link to="/default">default</Link>
        </span>
        <span>
          <Link to="/projects">projects</Link>
        </span>
        <span>
          <Link to="/about">about</Link>
        </span>
        <span>
          <Link to="/contact">contact</Link>
        </span>
      </nav>
    </div>
  );
};

export default Landing;
