import React, { useRef } from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import SlideWrapper from "../../components/styled/SlideWrapper";
import {
  ANI_CONST,
  ImageQualityProps,
} from "../../components/styled/constants";
import FadeWrapper from "../../components/styled/FadeWrapper";

const Personal = ({ imgQuality }: ImageQualityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const animationBreakpoint = useMediaQuery(
    theme.breakpoints.down(ANI_CONST.PROJ_ROW_BREAKPOINT)
  );
  return (
    <>
      <div ref={containerRef}>
        <FadeWrapper delay={ANI_CONST.PROJ_SUBHEADING_DELAY}>
          <Typography variant="h4">Personal_projects</Typography>
        </FadeWrapper>
        <Grid container spacing={2} alignItems="flex-start">
          {ProjectList[ProjectCategories.PERSONAL].map((proj, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={i * ANI_CONST.PROJ_CARDS_DELAY}
                direction={animationBreakpoint ? "up" : "left"}
              >
                <ProjectBlock proj={proj} imgQuality={imgQuality} key={i} />
              </SlideWrapper>
            );
          })}
        </Grid>
      </div>
      <Outlet />
    </>
  );
};

export default Personal;
