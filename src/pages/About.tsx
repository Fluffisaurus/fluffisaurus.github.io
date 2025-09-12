import React from "react";

import { Grid, Typography } from "@mui/material";

import AboutMeContent from "../content/about-me";
import ContentBlock from "../components/ContentBlock";
import ScrollableContainer from "../components/styled/ScrollableContainer";

const AboutMe: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer>
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
      </ScrollableContainer>
    </>
  );
};

export default AboutMe;
