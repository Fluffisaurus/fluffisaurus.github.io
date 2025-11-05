import React from "react";

import Typography from "@mui/material/Typography";

import ScrollableContainer from "../components/styled/ScrollableContainer";
import FadeWrapper from "../components/styled/FadeWrapper";

const Resume: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer>
        <FadeWrapper>
          <Typography variant="h3">Resume</Typography>
        </FadeWrapper>
      </ScrollableContainer>
    </>
  );
};

export default Resume;
