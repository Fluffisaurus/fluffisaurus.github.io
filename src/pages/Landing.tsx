import React from "react";
import NavLinks, { NavLinksProps } from "../components/NavLinks";

import "../styles/landing.scss";

const Landing = ({ openSubLinks, setOpenSubLinks }: NavLinksProps) => {
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
          <h1>🏠</h1>
        </span>
      </div>
      <nav className="Landing-container__nav">
        <span>
          <a className="Nav-link__no-events">~$</a>
        </span>
        <NavLinks
          openSubLinks={openSubLinks}
          setOpenSubLinks={setOpenSubLinks}
        />
      </nav>
    </div>
  );
};

export default Landing;
