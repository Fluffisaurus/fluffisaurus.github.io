import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Academic = () => {
  return (
    <>
      <Typography variant="h4">Academic_projects</Typography>
      <Grid container spacing={2} alignItems="flex-start">
        {ProjectList[ProjectCategories.ACADEMIC].map((proj, i) => {
          return <ProjectBlock proj={proj} key={i} />;
        })}
      </Grid>
    </>
  );
};

export default Academic;
