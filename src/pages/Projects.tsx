import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/projects.scss";
import { Typography } from "@mui/material";
import ScrollableContainer from "../components/styled/ScrollableContainer";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer className="Projects-container">
        <Typography variant="h3">Projects</Typography>
        <Outlet />
      </ScrollableContainer>
    </>
  );
};

export default Projects;
