import React from "react";
import NavLinks from "../components/NavLinks";

import "../styles/landing.scss";
import { Box, Button, Typography } from "@mui/material";
import { muiButtonNavlinkFontSizes } from "../mui/components/muiButton";

const Landing = () => {
  return (
    <Box className="Landing-container">
      <Box className="Landing-container__greeting">
        <Typography variant="h5" sx={{ fontFamily: "Karla", fontWeight: 700}}>
          Hi there! Welcome to
        </Typography>
      </Box>
      <Box className="Landing-container__name">
        <Typography className="Landing-container__name__fullname" variant="h1">
          angus_hon
        </Typography>
        <Typography className="Landing-container__name__at" variant="h1">
          @🏠
        </Typography>
      </Box>
      <Box className="Landing-container__nav">
        <Button className="Nav-link__no-events" size="large" variant="navlink" sx={{ paddingLeft: 0, ...muiButtonNavlinkFontSizes }}>
          ~$
        </Button>
        <NavLinks />
      </Box>
    </Box>
  );
};

export default Landing;
