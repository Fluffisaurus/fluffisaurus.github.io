import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import type {} from "@mui/material/themeCssVarsAugmentation";

import NavLinks from "../components/NavLinks";

import theme from "../mui/theme";
import { ANI_CONST } from "../components/styled/constants";

const landingBoxStyleProps: BoxProps = {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
};

const landingNameStyleProps: BoxProps = {
  width: "fit-content",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "0px 0px 24px 0px",
};

const Landing = () => {
  return (
    <Fade in appear timeout={500}>
      <Box
        {...landingBoxStyleProps}
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
          {...landingNameStyleProps}
          sx={(theme) => ({
            [theme.breakpoints.down("laptop")]: { padding: 0 },
          })}
        >
          <Typography
            variant="h1"
            sx={[
              {
                color: theme.vars.palette.primary.contrastText,
                backgroundColor: theme.vars.palette.background.highlight,
                ...landingNameStyleProps,
                padding: "8px 0px 8px 0px",
              },
              (theme) => ({
                [theme.breakpoints.down("laptop")]: { padding: 0 },
              }),
            ]}
          >
            angus_hon
          </Typography>
          <Typography
            variant="h1"
            sx={[
              {
                color: theme.vars.palette.primary.contrastText,
                ...landingNameStyleProps,
                padding: "8px 0px 8px 0px",
              },
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
          width="100%"
          display="flex"
          flexWrap="wrap"
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
