import React from "react";
import FadeWrapper from "../components/styled/FadeWrapper";
import Typography from "@mui/material/Typography";

const Loading: React.FunctionComponent = () => {
  return (
    <>
      <FadeWrapper>
        <Typography variant="h5">loading...</Typography>
      </FadeWrapper>
    </>
  );
};

export default Loading;
