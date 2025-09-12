import React from "react";

import { Typography } from "@mui/material";
import ScrollableContainer from "../components/styled/ScrollableContainer";

const Contact: React.FunctionComponent = () => {
  return (
    <>
      <ScrollableContainer>
        <Typography variant="h3">Contact_info</Typography>
        <Typography variant="body1">
          linkedin:{" "}
          <a href="https://www.linkedin.com/in/angus-hon/" target="_blank">
            https://www.linkedin.com/in/angus-hon/
          </a>
        </Typography>
        <Typography variant="body1">email: angushon96@gmail.com</Typography>
      </ScrollableContainer>
    </>
  );
};

export default Contact;
