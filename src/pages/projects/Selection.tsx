import React, { useRef } from "react";
import Grid from "@mui/material/Grid";

import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import ProjectSelectionBlock from "../../components/project/ProjectSelectionBlock";
import SlideWrapper from "../../components/styled/SlideWrapper";

const Selection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef}>
      <Grid
        container
        direction="row"
        spacing={2}
        size={{ mobile: 6, tablet: 8 }}
        sx={{ paddingBottom: "40px" }}
      >
        <SlideWrapper slideFromRef={containerRef} delay={500} direction="up">
          <ProjectSelectionBlock
            cat={ProjectCategories.PERSONAL}
            data={ProjectList[ProjectCategories.PERSONAL]}
          />
        </SlideWrapper>
        <SlideWrapper slideFromRef={containerRef} delay={1000} direction="up">
          <ProjectSelectionBlock
            cat={ProjectCategories.ACADEMIC}
            data={ProjectList[ProjectCategories.ACADEMIC]}
          />
        </SlideWrapper>
      </Grid>
    </div>
  );
};

export default Selection;
