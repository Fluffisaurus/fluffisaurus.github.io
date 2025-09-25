import React, { useRef, useState } from "react";

import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import SlideWrapper from "../styled/SlideWrapper";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
import FadeWrapper from "../styled/FadeWrapper";
import { isSmallScreen } from "../../utils/breakpoints";

interface ProjectVariantsProps extends ImageQualityProps {
  variant: ProjectCategories;
}

const ProjectVariants = ({ variant, imgQuality }: ProjectVariantsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProj, setActiveProj] = useState<string | null>(null);
  const animationBreakpoint = isSmallScreen();
  return (
    <>
      <div ref={containerRef}>
        <FadeWrapper delay={ANI_CONST.PROJ_SUBHEADING_DELAY}>
          <Typography variant="h4">{variant} projects</Typography>
        </FadeWrapper>
        <Grid container spacing={2} alignItems="flex-start">
          {ProjectList[variant].map((proj, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={i * ANI_CONST.PROJ_CARDS_DELAY}
                direction={animationBreakpoint ? "up" : "left"}
              >
                <ProjectCard
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

export default ProjectVariants;
