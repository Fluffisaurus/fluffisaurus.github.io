import React from "react";
import { Link } from "react-router-dom";

export interface NavLinksProps {
  openSubLinks: boolean;
  setOpenSubLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const paths = [
  {
    path: "/about",
    text: "about",
    subpaths: [],
  },
  {
    path: "/projects",
    text: "projects",
    subpaths: [
      { path: "/personal", text: "personal" },
      { path: "/academic", text: "academic" },
    ],
  },
  {
    path: "/contact",
    text: "contact",
    subpaths: [],
  },
];

const NavLinks = ({ openSubLinks, setOpenSubLinks }: NavLinksProps) => {
  return (
    <>
      {paths.map((path, index) => {
        return (
          <>
            {path.subpaths.length !== 0 ? (
              <>
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
                    to={path.path}
                    className={openSubLinks ? "Nav-link--active" : ""}
                    key={`${path.text}-${index}`}
                  >
                    {path.text}
                  </Link>
                  <div>
                    {path.subpaths.map((subPath, index) => {
                      return (
                        <span>
                          <Link to={path.path + subPath.path} key={`${path.text}-${index}`}  >
                            {subPath.text}
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                </span>
              </>
            ) : (
              <span>
                <Link to={path.path}>{path.text}</Link>
              </span>
            )}
          </>
        );
      })}
    </>
  );
};

export default NavLinks;
