import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FadeWrapper from "../components/styled/FadeWrapper";
// import PdfViewer from "../components/pdf/PdfViewer";

const Resume: React.FunctionComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <FadeWrapper>
          <Typography variant="h3">Resume</Typography>
        </FadeWrapper>
        {/* <PdfViewer /> */}
        <object
          data="https://res.cloudinary.com/djlcricbu/image/upload/v1653627212/pdfs/placeholder-pdf-doc_j3pjxs.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <Typography variant="body1">
            Your browser does not support PDF viewing.
          </Typography>
        </object>
      </Box>
    </>
  );
};

export default Resume;
