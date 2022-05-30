import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "../styles/global-nav.scss";

const GlobalNav = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<string>("");

  useEffect(() => {
    setCurrPage(location.pathname.substring(1));
    location.pathname === "/" ? setToggleNav(false) : setToggleNav(true);
  }, [location]);

  return (
    <>
      {toggleNav && (
        <div className="Global-nav">
          <span className="Global-nav__root">
            <Link to="/">angus_hon@website:/root/{currPage}~$</Link>
          </span>
          <nav>
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
      )}
    </>
  );
};

export default GlobalNav;
