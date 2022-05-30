import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <h1>Projects</h1>
        <Link to="personal">personal</Link>
        <Link to="academic">academic</Link>
        <div className="Projects-container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Projects;
