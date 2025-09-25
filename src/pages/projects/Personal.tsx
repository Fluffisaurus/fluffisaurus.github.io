import React, { useRef, useState } from "react";

import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import ProjectBlock from "../../components/project/ProjectCard";
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
import { isSmallScreen } from "../../utils/breakpoints";

const Personal = ({ imgQuality }: ImageQualityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProj, setActiveProj] = useState<string | null>(null);
  const animationBreakpoint = isSmallScreen();
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

export default Personal;
