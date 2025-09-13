import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/projects.scss";
import { Typography } from "@mui/material";
import ScrollableContainer from "../components/styled/ScrollableContainer";
import FadeWrapper from "../components/styled/FadeWrapper";

const Projects: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer className="Projects-container">
        <FadeWrapper>
          <Typography variant="h3">Projects</Typography>
        </FadeWrapper>
        <Outlet />
      </ScrollableContainer>
    </>
  );
};

export default Projects;
