import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { lazy } from "@loadable/component";

import type {} from "@mui/material/themeCssVarsAugmentation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material"; // eslint-disable-line no-restricted-imports
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";
import SubdirectoryArrowRightTwoToneIcon from "@mui/icons-material/SubdirectoryArrowRightTwoTone";

import computeNodeStyle from "../utils/computeNodeStyle";
import { globalNavButtonProps } from "../mui/components/muiButton";
import "../styles/global-nav.scss";
import { ANI_CONST, ImageQualityProps } from "./styled/constants";
import { TypeAnimation } from "react-type-animation";
import { isSmallScreen } from "../utils/breakpoints";
import theme from "../mui/theme";

const CustomOptionsDial = lazy(() => import("./CustomOptionsDial"));

const StyledBox = styled("div")(({ theme }) => [
  {
    backgroundColor: theme.vars.palette.background.globalNav,
    paddingBottom: "3px",
  },
  theme.applyStyles("dark", {
    backgroundColor: theme.vars.palette.background.globalNav,
  }),
]);

const globalNavDrawerButtonStyles = {
  width: "min-content",
};

const GlobalNav = (props: ImageQualityProps) => {
  const location = useLocation();
  const [currPath, setCurrPath] = useState<string>("");
  const [subPath, setSubPath] = useState<string | null>();
  const [hoverPath, setHoverPath] = useState<string | null>();
  const [hoverText, setHoverText] = useState<string>("cd ");
  const [fullPath, setFullPath] = useState<string | null>();

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (location.pathname == "/") {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, ANI_CONST.GLOBAL_NAV_LANDING_DELAY);

      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const smallScreen = isSmallScreen();

  const popupState = usePopupState({
    variant: "popover",
    popupId: "globalNavPopup",
  });

  const [drawerProjectButtonDims, setDrawerProjectButtonDims] = useState({
    width: 0,
    height: 0,
  });
  const drawerProjectButtonRef = useCallback(
    (node: HTMLButtonElement | null) => {
      if (node !== null) {
        const nodeDims = computeNodeStyle(node);
        setDrawerProjectButtonDims({
          width: nodeDims.width,
          height: nodeDims.height,
        });
      }
    },
    []
  );

  const [homeIconButtonDims, setHomeIconeButtonDims] = useState({
    width: 0,
    height: 0,
  });
  const homeIconButtonRef = useCallback((node: HTMLButtonElement | null) => {
    if (node !== null) {
      const nodeDims = computeNodeStyle(node);
      setHomeIconeButtonDims({
        width: nodeDims.width,
        height: nodeDims.height,
      });
    }
  }, []);

  useEffect(() => {
    setOpenDrawer(false);
    if (location.pathname === "/") {
      popupState.close();
    }

    if (location.pathname.substring(1).includes("/")) {
      setCurrPath(location.pathname.substring(1).split("/")[0]);
      setSubPath(location.pathname.substring(1).split("/")[1]);
      setHoverPath(location.pathname);
    } else {
      setCurrPath(location.pathname.substring(1));
      setSubPath(null);
      setHoverPath(location.pathname.substring(1));
    }
    setFullPath(location.pathname);
  }, [location]);

  useEffect(() => {
    if (hoverPath == "menu") {
      setHoverText("ls -R ~");
      return;
    }
    if (!hoverPath) {
      setHoverText("");
      return;
    }
    if (subPath) {
      if (hoverPath == fullPath) {
        setHoverText("cd ./");
        return;
      }
      if (fullPath?.includes(hoverPath)) {
        setHoverText("cd ../");
        return;
      }
      if (hoverPath != fullPath) {
        setHoverText("cd " + hoverPath);
        return;
      }
    } else if (hoverPath == fullPath) {
      setHoverText("cd ./");
    } else {
      setHoverText("cd " + hoverPath);
    }
  }, [hoverPath]);

  return (
    <>
      <Slide in={showContent}>
        <StyledBox
          className="Global-nav"
          role="banner"
          sx={{ zIndex: ANI_CONST.ZINDEX.GLOBAL_NAV }}
        >
          <Box className="Global-nav__root">
            <Button
              onClick={toggleDrawer}
              {...globalNavButtonProps}
              onMouseEnter={() => setHoverPath("menu")}
              aria-label="Global navigation button to expand drawer navigation."
            >
              {openDrawer ? <MenuOpenTwoToneIcon /> : <MenuTwoToneIcon />}
            </Button>
            <Button
              ref={homeIconButtonRef}
              component={Link}
              to={"/"}
              {...globalNavButtonProps}
              sx={{ ...globalNavButtonProps.sx }}
              onMouseEnter={() => setHoverPath("~")}
              aria-label="Global navigation button to return to home."
            >
              🏠
            </Button>
            <Button
              className="Nav-link__no-events"
              disabled
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                color: theme.vars.palette.primary.dark,
                padding: 0,
                tabIndex: -1,
              }}
              aria-label="Styling emulating a terminal's file structure."
            >
              :/
            </Button>
            <Button
              component={Link}
              to={currPath}
              {...globalNavButtonProps}
              sx={{ ...globalNavButtonProps.sx, padding: 0 }}
              onMouseEnter={() => setHoverPath("/" + currPath)}
              aria-label="Breadcrumb navigation path."
            >
              {currPath == "" ? "" : currPath + "/"}
            </Button>
            {subPath && (
              <Button
                component={Link}
                to={currPath + "/" + subPath}
                {...globalNavButtonProps}
                sx={{ ...globalNavButtonProps.sx, padding: 0 }}
                onMouseEnter={() =>
                  setHoverPath("/" + currPath + "/" + subPath)
                }
                aria-label="Breadcrumb navigation subpath."
              >
                {subPath + "/"}
              </Button>
            )}
            <Button
              className="Nav-link__no-events"
              disabled
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                color: theme.vars.palette.primary.dark,
                padding: 0,
                tabIndex: -1,
              }}
              aria-label="Styling emulating a terminal's command line blinking cursor for text input."
            >
              ~$
            </Button>
            {!smallScreen && (
              <Button
                className="Nav-link__no-events"
                disabled
                {...globalNavButtonProps}
                sx={{
                  ...globalNavButtonProps.sx,
                  color: theme.vars.palette.primary.light,
                  justifyContent: "flex-start",
                  padding: "0 5px 0 25px",
                  tabIndex: -1,
                }}
                aria-label="Styling emulating a terminal's command line input. Types out paths and sub paths on user focus."
              >
                <TypeAnimation
                  key={hoverText}
                  sequence={[hoverText, 500]}
                  speed={hoverText.length > 8 ? 50 : 1}
                />
              </Button>
            )}
            <CustomOptionsDial {...props} dims={homeIconButtonDims} />
          </Box>
        </StyledBox>
      </Slide>
      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        disableSwipeToOpen={false}
        keepMounted
      >
        <StyledBox sx={{ position: "relative" }}>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100",
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
              marginLeft: homeIconButtonDims.width + "px",
            }}
          >
            <Button
              component={Link}
              to={"/about"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
              }}
              onMouseEnter={() => setHoverPath("/about")}
              aria-label="Global navigation drawer menu link to about page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              about
            </Button>
            <Button
              ref={drawerProjectButtonRef}
              className="Nav-link__no-events"
              disabled
              {...globalNavButtonProps}
              {...bindTrigger(popupState)}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
                color: theme.vars.palette.primary.dark,
                tabIndex: -1,
              }}
              onMouseEnter={() => setHoverPath("/projects")}
              aria-label="Global navigation drawer menu heading that emulates a terminal's foldre structure showing that projects is a folder with contents."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              projects/
            </Button>
            <Button
              component={Link}
              to={"/projects"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
                marginLeft: drawerProjectButtonDims.width + "px",
              }}
              onMouseEnter={() => setHoverPath("/projects")}
              aria-label="Global navigation drawer menu link to projects page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              ./
            </Button>
            <Button
              component={Link}
              to={"/projects/personal"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
                marginLeft: drawerProjectButtonDims.width + "px",
              }}
              onMouseEnter={() => setHoverPath("/projects/personal")}
              aria-label="Global navigation drawer menu link to personal projects page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              personal
            </Button>
            <Button
              component={Link}
              to={"/projects/academic"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
                marginLeft: drawerProjectButtonDims.width + "px",
              }}
              onMouseEnter={() => setHoverPath("/projects/academic")}
              aria-label="Global navigation drawer menu link to academic projects page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              academic
            </Button>
            <Button
              component={Link}
              to={"/contact"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
              }}
              onMouseEnter={() => setHoverPath("/contact")}
              aria-label="Global navigation drawer menu link to contact page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              contact
            </Button>
          </StyledBox>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
};

export default GlobalNav;
