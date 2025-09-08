import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";
import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Personal = () => {
  return (
    <>
      <Typography variant="h4">Personal_projects</Typography>
      <Grid container spacing={2} alignItems="flex-start">
        {ProjectList[ProjectCategories.PERSONAL].map((proj, i) => {
          return <ProjectBlock proj={proj} key={i} />;
        })}
      </Grid>
      <Outlet />
    </>
  );
};

export default Personal;
