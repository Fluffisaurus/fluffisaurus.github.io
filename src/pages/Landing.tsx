import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/landing.scss";

const Landing: React.FunctionComponent = () => {
  return (
    <div className="Container">
      <div className="Container__greeting">
        <span>
          <p>Hi there fellow human! I am</p>
        </span>
      </div>
      <div className="Container__name">
        <span className="Container__name__fullname">
          <h1>angus_hon</h1>
        </span>
        <span className="Container__name__at">
          <h1>@</h1>
        </span>
        <span className="Container__name__title">
          <h1>software_engineer</h1>
        </span>
      </div>
      <nav className="Container__nav">
        <span>
          <a>~$</a>
        </span>
        <span>
          <Link to="/default">default</Link>
        </span>
        <span>
          <Link to="/about">about</Link>
        </span>
        <span>
          <Link to="/contact">contact</Link>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};

export default Landing;
