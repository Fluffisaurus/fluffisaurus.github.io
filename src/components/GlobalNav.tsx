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
import {
  useHoverPath,
  useHoverPathDispatch,
} from "../providers/HoverPathProvider";

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

  const hoverPath = useHoverPath();
  const dispatch = useHoverPathDispatch();

  const [hoverText, setHoverText] = useState<string>("cd ");
  const [fullPath, setFullPath] = useState<string | null>();

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

  const [drawerIconButtonDims, setDrawerIconButtonDims] = useState({
    width: 0,
    height: 0,
  });
  const drawerIconButtonRef = useCallback((node: HTMLButtonElement | null) => {
    if (node !== null) {
      const nodeDims = computeNodeStyle(node);
      setDrawerIconButtonDims({
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

    const pathSubstring = location.pathname.substring(1);
    if (pathSubstring.includes("/")) {
      setCurrPath(pathSubstring.split("/")[0]);
      setSubPath(pathSubstring.split("/")[1]);
      dispatch({
        type: "onHover",
        path: location.pathname,
      });
    } else {
      setCurrPath(pathSubstring);
      setSubPath(null);
      dispatch({
        type: "onHover",
        path: pathSubstring,
      });
    }
    setFullPath(location.pathname);
  }, [location]);

  useEffect(() => {
    if (hoverPath.path == "menu") {
      setHoverText("ls -R ~");
      return;
    }
    if (subPath) {
      if (hoverPath.path == fullPath) {
        setHoverText("cd ./");
        return;
      }
      if (fullPath?.includes(hoverPath.path)) {
        setHoverText("cd ../");
        return;
      }
      if (hoverPath.path != fullPath) {
        setHoverText("cd " + hoverPath.path);
        return;
      }
    } else if (hoverPath.path == fullPath) {
      setHoverText("cd ./");
    } else {
      setHoverText("cd " + hoverPath.path);
    }
  }, [hoverPath]);

  return (
    <>
      <Slide in timeout={ANI_CONST.GLOBAL_NAV_DELAY}>
        <StyledBox
          className="Global-nav"
          role="banner"
          sx={{ zIndex: ANI_CONST.ZINDEX.GLOBAL_NAV }}
        >
          <Box className="Global-nav__root">
            <Button
              ref={drawerIconButtonRef}
              onClick={toggleDrawer}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                minWidth: ANI_CONST.GLOBAL_NAV_HEIGHT,
              }}
              onMouseEnter={() => dispatch({ type: "onHover", path: "menu" })}
              aria-label="Global navigation button to expand drawer navigation."
            >
              {openDrawer ? <MenuOpenTwoToneIcon /> : <MenuTwoToneIcon />}
            </Button>
            <Button
              component={Link}
              to={"/"}
              {...globalNavButtonProps}
              sx={{ ...globalNavButtonProps.sx }}
              onMouseEnter={() => dispatch({ type: "onHover", path: "~" })}
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/" + currPath })
              }
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
                  dispatch({
                    type: "onHover",
                    path: "/" + currPath + "/" + subPath,
                  })
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
            <CustomOptionsDial {...props} dims={drawerIconButtonDims} />
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
              marginLeft: drawerIconButtonDims.width + "px",
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
              onMouseEnter={() => dispatch({ type: "onHover", path: "/about" })}
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/projects" })
              }
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/projects" })
              }
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/projects/personal" })
              }
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/projects/academic" })
              }
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
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/contact" })
              }
              aria-label="Global navigation drawer menu link to contact page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              contact
            </Button>
            <Button
              component={Link}
              to={"/resume"}
              {...globalNavButtonProps}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
              }}
              onMouseEnter={() =>
                dispatch({ type: "onHover", path: "/resume" })
              }
              aria-label="Global navigation drawer menu link to resume page."
            >
              <SubdirectoryArrowRightTwoToneIcon />
              resume
            </Button>
          </StyledBox>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
};

export default GlobalNav;
