import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../../styles/projects-container.scss";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <h1>Projects</h1>
        <div className="Projects-container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Projects;
