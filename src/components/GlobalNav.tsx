import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/global-nav.scss";

interface GlobalNavProps {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
  openSubLinks: boolean;
  setOpenSubLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalNav = ({
  toggleNav,
  setToggleNav,
  openSubLinks,
  setOpenSubLinks,
}: GlobalNavProps) => {
  const location = useLocation();
  const [currPage, setCurrPage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(openSubLinks);

  useEffect(() => {
    if (openSubLinks) setIsOpen(true);
  }, [openSubLinks]);

  useEffect(() => {
    setCurrPage(location.pathname.substring(1));
    location.pathname === "/" ? setToggleNav(false) : setToggleNav(true);
  }, [location]);

  return (
    <>
      {toggleNav && (
        <div className="Global-nav">
          <span
            className="Global-nav__root"
            onClick={() => setOpenSubLinks(false)}
          >
            <Link to="/">
              ah@site:/root/<span>{currPage}</span>~$
            </Link>
          </span>
          <nav>
            <span>
              <Link to="/default">default</Link>
            </span>
            <span
              className={
                isOpen
                  ? "Global-nav__parent Global-nav__parent--open"
                  : "Global-nav__parent"
              }
            >
              <Link
                to="/projects"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
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
      )}
    </>
  );
};

export default GlobalNav;
