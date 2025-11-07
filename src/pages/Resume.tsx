import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FadeWrapper from "../components/styled/FadeWrapper";
import PdfViewer from "../components/pdf/PdfViewer";

const Resume: React.FunctionComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0",
          overflow: "hidden",
        }}
      >
        <FadeWrapper>
          <Typography variant="h3">Resume</Typography>
        </FadeWrapper>
        <PdfViewer />
      </Box>
    </>
  );
};

export default Resume;
