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
  const [currPath, setCurrPath] = useState<string>("");
  const [subPath, setSubPath] = useState<string | null>();
  const [isOpen, setIsOpen] = useState<boolean>(openSubLinks);

  useEffect(() => {
    if (openSubLinks) setIsOpen(true);
  }, [openSubLinks]);

  useEffect(() => {
    location.pathname === "/" ? setToggleNav(false) : setToggleNav(true);

    if (location.pathname.substring(1).includes("/")) {
      setCurrPath(location.pathname.substring(1).split("/")[0]);
      setSubPath(location.pathname.substring(1).split("/")[1]);
    } else {
      setCurrPath(location.pathname.substring(1));
      setSubPath(null);
    }
  }, [location]);

  return (
    <>
      {toggleNav && (
        <div className="Global-nav">
          <span
            className="Global-nav__root"
            onClick={() => setOpenSubLinks(false)}
          >
            <Link to="/">ah@site:/root</Link>
            <Link to={currPath} className="Nav-link--active">
              {"/" + currPath}
            </Link>
            {subPath && (
              <Link to={currPath + "/" + subPath} className="Nav-link--active">
                {"/" + subPath}
              </Link>
            )}
            <a className="Nav-link__no-events">~$</a>
          </span>
          <nav>
            <span>
              <Link
                to="/about"
                className={"about" === currPath ? "Nav-link--active" : ""}
              >
                about
              </Link>
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
                className={"projects" === currPath ? "Nav-link--active" : ""}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                projects
              </Link>
              <div>
                <span>
                  <Link
                    to="/projects/personal"
                    className={"personal" === subPath ? "Nav-link--active" : ""}
                  >
                    personal
                  </Link>
                </span>
                <span>
                  <Link
                    to="/projects/academic"
                    className={"academic" === subPath ? "Nav-link--active" : ""}
                  >
                    academic
                  </Link>
                </span>
              </div>
            </span>
            <span>
              <Link
                to="/contact"
                className={"contact" === currPath ? "Nav-link--active" : ""}
              >
                contact
              </Link>
            </span>
          </nav>
        </div>
      )}
    </>
  );
};

export default GlobalNav;
