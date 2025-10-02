import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Typography from "@mui/material/Typography";

import "../../styles/projects.scss";
import ScrollableContainer from "../../components/styled/ScrollableContainer";
import FadeWrapper from "../../components/styled/FadeWrapper";
import { TypeAnimation } from "react-type-animation";
import { ANI_CONST } from "../../components/styled/constants";

const Projects: React.FunctionComponent = () => {
  const location = useLocation();
  const delay =
    location.key === "default"
      ? ANI_CONST.WRAPPER_ONLOAD_DELAY + ANI_CONST.PROJ_SUBHEADING_DELAY
      : ANI_CONST.PROJ_SUBHEADING_DELAY;
  const academic = location.pathname.includes("academic");
  const personal = location.pathname.includes("personal");
  const subPage = academic || personal;
  const subPageHeadingText = academic ? " - academic" : " - personal";
  return (
    <>
      <ScrollableContainer className="Projects-container">
        <FadeWrapper>
          <Typography
            variant="h3"
            sx={{ paddingTop: "5px", paddingBottom: "10px" }}
          >
            Projects
            {subPage && (
              <TypeAnimation
                key={location.key}
                sequence={[delay, subPageHeadingText]}
                speed={30}
                cursor={false}
              />
            )}
          </Typography>
        </FadeWrapper>
        <Outlet />
      </ScrollableContainer>
    </>
  );
};

export default Projects;
