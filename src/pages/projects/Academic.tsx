import React, { useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
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

const Academic = ({ imgQuality }: ImageQualityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProj, setActiveProj] = useState<string | null>(null);
  const theme = useTheme();
  const animationBreakpoint = useMediaQuery(
    theme.breakpoints.down(ANI_CONST.PROJ_ROW_BREAKPOINT)
  );
  return (
    <>
      <div ref={containerRef}>
        <FadeWrapper delay={ANI_CONST.PROJ_SUBHEADING_DELAY}>
          <Typography variant="h4">Academic_projects</Typography>
        </FadeWrapper>
        <Grid container spacing={2} alignItems="flex-start">
          {ProjectList[ProjectCategories.ACADEMIC].map((proj, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={i * ANI_CONST.PROJ_CARDS_DELAY}
                direction={animationBreakpoint ? "up" : "left"}
              >
                <ProjectBlock
                  activeProj={activeProj}
                  setActiveProj={setActiveProj}
                  proj={proj}
                  imgQuality={imgQuality}
                  key={i}
                />
              </SlideWrapper>
            );
          })}
        </Grid>
      </div>
      <Outlet />
    </>
  );
};

export default Academic;
