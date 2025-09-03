import React from "react";
import Grid from "@mui/material/Grid";

import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import ProjectSelectionBlock from "../../components/ProjectSelectionBlock";

const Selection = () => {
  return (
    <Grid container direction="row" spacing={2} size={{ xs: 6, md: 8 }}>
      <ProjectSelectionBlock
        cat={ProjectCategories.PERSONAL}
        data={ProjectList[ProjectCategories.PERSONAL]}
      />
      <ProjectSelectionBlock
        cat={ProjectCategories.ACADEMIC}
        data={ProjectList[ProjectCategories.ACADEMIC]}
      />
    </Grid>
  );
};

export default Selection;
