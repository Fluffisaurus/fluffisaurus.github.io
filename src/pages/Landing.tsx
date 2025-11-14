import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import type {} from "@mui/material/themeCssVarsAugmentation";

import NavLinks from "../components/NavLinks";

import "../styles/landing.scss";
import theme from "../mui/theme";

const Landing = () => {
  return (
    <Fade in appear>
      <Box className="Landing-container" role="main">
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
        <Box className="Landing-container__nav" role="navigation">
          <NavLinks />
        </Box>
      </Box>
    </Fade>
  );
};

export default Landing;
