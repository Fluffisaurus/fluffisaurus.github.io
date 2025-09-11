import React from "react";
import NavLinks from "../components/NavLinks";

import "../styles/landing.scss";
import { Box, Button, Typography } from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { navLinkButtonProps } from "../mui/components/muiButton";
import theme from "../mui/theme";

const Landing = () => {
  return (
    <Box className="Landing-container">
      <Typography variant="h5" sx={{ fontFamily: "Karla", fontWeight: 700 }}>
        Hi there! Welcome to
      </Typography>
      <Box className="Landing-container__name">
        <Typography
          className="Landing-container__name__fullname"
          variant="h1"
          sx={{
            color: theme.vars.palette.primary.main,
            backgroundColor: theme.vars.palette.background.highlight,
          }}
        >
          angus_hon
        </Typography>
        <Typography
          className="Landing-container__name__at"
          variant="h1"
          sx={{ color: theme.vars.palette.primary.main }}
        >
          @🏠
        </Typography>
      </Box>
      <Box className="Landing-container__nav">
        <Button
          className="Nav-link__no-events"
          {...navLinkButtonProps}
          sx={{ paddingLeft: 0, ...navLinkButtonProps.sx }}
        >
          ~$
        </Button>
        <NavLinks />
      </Box>
    </Box>
  );
};

export default Landing;
