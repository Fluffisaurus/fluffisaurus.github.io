import { Typography } from "@mui/material";
import React from "react";

const Contact: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <Typography variant="h3">Contact_info</Typography>
        <Typography variant="body1">
          linkedin:{" "}
          <a href="https://www.linkedin.com/in/angus-hon/" target="_blank">
            https://www.linkedin.com/in/angus-hon/
          </a>
        </Typography>
        <Typography variant="body1">email: angushon96@gmail.com</Typography>
      </section>
    </>
  );
};

export default Contact;
