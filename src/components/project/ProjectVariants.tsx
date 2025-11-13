import React, { useRef, useState } from "react";

import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import SlideWrapper from "../styled/SlideWrapper";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
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
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          sx={{ paddingBottom: "40px" }}
        >
          {ProjectList[variant].map((proj, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={
                  ANI_CONST.PROJ_SUBHEADING_TYPING_DELAY +
                  i * ANI_CONST.PROJ_CARDS_DELAY
                }
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
