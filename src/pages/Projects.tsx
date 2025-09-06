import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/projects.scss";
import { Typography } from "@mui/material";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <section className="Projects-container">
        <Typography variant="h3">Projects</Typography>
        <Outlet />
      </section>
    </>
  );
};

export default Projects;
