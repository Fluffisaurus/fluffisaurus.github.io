import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import GrowWrapper from "../../components/styled/GrowWrapper";

const Academic = () => {
  return (
    <GrowWrapper>
      <Typography variant="h4">Academic_projects</Typography>
      <Grid container spacing={2} alignItems="flex-start">
        {ProjectList[ProjectCategories.ACADEMIC].map((proj, i) => {
          return <ProjectBlock proj={proj} key={i} />;
        })}
      </Grid>
      <Outlet />
    </GrowWrapper>
  );
};

export default Academic;
