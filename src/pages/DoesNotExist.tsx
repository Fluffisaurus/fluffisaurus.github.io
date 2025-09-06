import { Typography } from "@mui/material";
import React from "react";

const DoesNotExist: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <Typography variant="h3">Oops!</Typography>
        <Typography variant="body1">
          The page you're looking for does not exist (yet?)!
        </Typography>
        <Typography variant="body1">
          Click the links above to teleport back!
        </Typography>
      </section>
    </>
  );
};

export default DoesNotExist;
