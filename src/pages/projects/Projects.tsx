import React from "react";
import { Outlet } from "react-router-dom";

import "../../styles/projects-container.scss";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <section className="Projects-container">
        <h1>Projects</h1>
        <Outlet />
      </section>
    </>
  );
};

export default Projects;
