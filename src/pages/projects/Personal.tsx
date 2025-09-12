import React from "react";

import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import GrowWrapper from "../../components/styled/GrowWrapper";

const Personal = () => {
  return (
    <GrowWrapper>
      <Typography variant="h4">Personal_projects</Typography>
      <Grid container spacing={2} alignItems="flex-start">
        {ProjectList[ProjectCategories.PERSONAL].map((proj, i) => {
          return <ProjectBlock proj={proj} key={i} />;
        })}
      </Grid>
      <Outlet />
    </GrowWrapper>
  );
};

export default Personal;
