import React, { useRef } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AboutMeContent from "../content/about-me";
import ContentBlock from "../components/ContentBlock";
import ScrollableContainer from "../components/styled/ScrollableContainer";
import SlideWrapper from "../components/styled/SlideWrapper";
import { ANI_CONST } from "../components/styled/constants";
import FadeWrapper from "../components/styled/FadeWrapper";

const AboutMe: React.FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ScrollableContainer ref={containerRef}>
        <FadeWrapper>
          <Typography variant="h3">5w1h</Typography>
        </FadeWrapper>
        <Grid
          container
          spacing={2}
          flexDirection={"column"}
          sx={{ paddingBottom: "40px" }}
        >
          {AboutMeContent?.map((cntBlk, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={i * ANI_CONST.ABOUT_CARD_DELAY}
                direction="up"
              >
                <ContentBlock
                  key={i}
                  heading={cntBlk.heading}
                  body={cntBlk.body}
                />
              </SlideWrapper>
            );
          })}
        </Grid>
      </ScrollableContainer>
    </>
  );
};

export default AboutMe;
