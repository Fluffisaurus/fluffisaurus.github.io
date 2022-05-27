import React from "react";
import { Outlet, Link } from "react-router-dom";

const Landing: React.FunctionComponent = () => {
  return (
    <div className="Container">
      <div className="Container__greeting">
        <p>Hi there fellow human(s)!</p>
      </div>
      <div className="Container__name">
        <span>
          <h1>angus_hon</h1>
        </span>
        <span>
          <h1>@</h1>
        </span>
        <span>
          <h1>software_engineer</h1>
        </span>
      </div>
      <nav className="Container__nav">
        <span>~$</span>
        <Link to="/default">default</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Landing;
