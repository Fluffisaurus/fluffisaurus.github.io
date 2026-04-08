import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import type {} from "@mui/material/themeCssVarsAugmentation";

import NavLinks from "../components/NavLinks";

import "../styles/landing.scss";
import theme from "../mui/theme";
import { ANI_CONST } from "../components/styled/constants";

const Landing = () => {
  return (
    <Fade in appear>
      <Box
        role="main"
        className="Landing-container"
        sx={(theme) => ({
          [theme.breakpoints.down("laptop")]: {
            padding: `${ANI_CONST.GLOBAL_NAV_HEIGHT}px`,
          },
        })}
      >
        <Typography variant="h5" sx={{ fontFamily: "Karla", fontWeight: 700 }}>
          Hi there! Welcome to
        </Typography>
        <Box
          className="Landing-container__name"
          sx={(theme) => ({
            [theme.breakpoints.down("laptop")]: { padding: 0 },
          })}
        >
          <Typography
            className="Landing-container__name__fullname"
            variant="h1"
            sx={[
              {
                color: theme.vars.palette.primary.contrastText,
                backgroundColor: theme.vars.palette.background.highlight,
              },
              (theme) => ({
                [theme.breakpoints.down("laptop")]: { padding: 0 },
              }),
            ]}
          >
            angus_hon
          </Typography>
          <Typography
            className="Landing-container__name__at"
            variant="h1"
            sx={[
              { color: theme.vars.palette.primary.contrastText },
              (theme) => ({
                [theme.breakpoints.down("laptop")]: { padding: 0 },
              }),
            ]}
          >
            @🏠
          </Typography>
        </Box>
        <Box
          role="navigation"
          className="Landing-container__nav"
          sx={[
            { gap: "24px" },
            (theme) => ({
              [theme.breakpoints.down("laptop")]: {
                flexDirection: "column",
                alignContent: "start",
                alignItems: "start",
                gap: "15px",
              },
            }),
          ]}
        >
          <NavLinks />
        </Box>
      </Box>
    </Fade>
  );
};

export default Landing;
