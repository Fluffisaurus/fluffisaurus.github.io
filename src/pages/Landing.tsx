import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import type {} from "@mui/material/themeCssVarsAugmentation";

import NavLinks from "../components/NavLinks";
import { navLinkButtonProps } from "../mui/components/muiButton";

import "../styles/landing.scss";
import theme from "../mui/theme";

const Landing = () => {
  return (
    <Fade in appear>
      <Box className="Landing-container">
        <Typography variant="h5" sx={{ fontFamily: "Karla", fontWeight: 700 }}>
          Hi there! Welcome to
        </Typography>
        <Box className="Landing-container__name">
          <Typography
            className="Landing-container__name__fullname"
            variant="h1"
            sx={{
              color: theme.vars.palette.primary.contrastText,
              backgroundColor: theme.vars.palette.background.highlight,
            }}
          >
            angus_hon
          </Typography>
          <Typography
            className="Landing-container__name__at"
            variant="h1"
            sx={{ color: theme.vars.palette.primary.contrastText }}
          >
            @🏠
          </Typography>
        </Box>
        <Box className="Landing-container__nav">
          <Button
            className="Nav-link__no-events"
            disabled
            {...navLinkButtonProps}
            sx={{
              paddingLeft: 0,
              ...navLinkButtonProps.sx,
              tabIndex: -1,
              "&.Mui-disabled": {
                color: theme.vars.palette.primary.contrastText,
              },
            }}
            aria-label="Styling emulating a terminal's command line blinking cursor for text input."
          >
            ~$
          </Button>
          <NavLinks />
        </Box>
      </Box>
    </Fade>
  );
};

export default Landing;
