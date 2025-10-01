import React from "react";

import Typography from "@mui/material/Typography";

import ScrollableContainer from "../components/styled/ScrollableContainer";

const DoesNotExist: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer>
        <Typography variant="h3">Oops!</Typography>
        <Typography variant="body1">
          The page you're looking for does not exist (yet?)!
        </Typography>
        <Typography variant="body1">
          Click the links above to teleport back!
        </Typography>
      </ScrollableContainer>
    </>
  );
};

export default DoesNotExist;
