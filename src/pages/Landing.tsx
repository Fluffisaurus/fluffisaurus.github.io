import React from "react";
import { Link } from "react-router-dom";

import "../styles/landing.scss";

interface LandingProps {
  openSubLinks: boolean;
  setOpenSubLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing = ({ openSubLinks, setOpenSubLinks }: LandingProps) => {
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
          <a className="Nav-links__no-events">~$</a>
        </span>
        <span>
          <Link to="/default">default</Link>
        </span>
        <span
          className={
            openSubLinks
              ? "Global-nav__parent-landing Global-nav__parent-landing--open"
              : "Global-nav__parent-landing"
          }
          onMouseEnter={() => setOpenSubLinks(true)}
          onMouseLeave={() => setOpenSubLinks(false)}
          onClick={() => setOpenSubLinks(true)}
        >
          <Link
            to="/projects"
            className={openSubLinks ? "Nav-link--active" : ""}
          >
            projects
          </Link>
          <div>
            <span>
              <Link to="/projects/personal">personal</Link>
            </span>
            <span>
              <Link to="/projects/academic">academic</Link>
            </span>
          </div>
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
