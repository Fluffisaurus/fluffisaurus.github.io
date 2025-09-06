import React from "react";

import AboutMeContent from "../content/about-me";
import ContentBlock from "../components/ContentBlock";
import { Grid, Typography } from "@mui/material";

const AboutMe: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <Typography variant="h3">5w1h</Typography>
        <Grid container spacing={2}>
          {AboutMeContent?.map((cntBlk, i) => {
            return (
              <ContentBlock
                key={i}
                heading={cntBlk.heading}
                body={cntBlk.body}
              />
            );
          })}
        </Grid>
      </section>
    </>
  );
};

export default AboutMe;
