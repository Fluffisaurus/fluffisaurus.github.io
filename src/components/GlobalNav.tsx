import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import type {} from "@mui/material/themeCssVarsAugmentation";
import {
  Box,
  Button,
  styled,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";
import SubdirectoryArrowRightTwoToneIcon from "@mui/icons-material/SubdirectoryArrowRightTwoTone";

import computeNodeStyle from "../utils/computeNodeStyle";
import { globalNavButtonProps } from "../mui/components/muiButton";
import "../styles/global-nav.scss";

interface GlobalNavProps {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const GlobalNav = ({ toggleNav, setToggleNav }: GlobalNavProps) => {
  const location = useLocation();
  const [currPath, setCurrPath] = useState<string>("");
  const [subPath, setSubPath] = useState<string | null>();
  const [hoverPath, setHoverPath] = useState<string | null>();
  const [hoverText, setHoverText] = useState<string>("cd ");
  const [fullPath, setFullPath] = useState<string | null>();

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      setToggleNav(false);
      popupState.close();
    } else {
      setToggleNav(true);
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
    console.log(
      `subPath: ${subPath}, hoverPath: ${hoverPath}, fullPath: ${fullPath}`
    );
    if (!hoverPath) {
      setHoverText("cd ");
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
      // console.warn(`WARNING: no matched path, values are...\nsubPath: ${subPath}, hoverPath: ${hoverPath}, fullPath: ${fullPath}`)
    } else if (hoverPath == fullPath) {
      setHoverText("cd ./");
    } else {
      setHoverText("cd " + hoverPath);
      // console.log("last option")
    }
  }, [hoverPath]);

  return (
    <>
      {toggleNav && (
        <StyledBox className="Global-nav">
          <Box className="Global-nav__root">
            <Button
              onClick={toggleDrawer}
              {...globalNavButtonProps}
              onMouseEnter={() => setHoverPath("menu")}
            >
              {openDrawer ? <MenuOpenTwoToneIcon /> : <MenuTwoToneIcon />}
            </Button>
            <Button
              ref={homeIconButtonRef}
              component={Link}
              to={"/"}
              {...globalNavButtonProps}
              sx={{ ...globalNavButtonProps.sx, padding: 0 }}
              onMouseEnter={() => setHoverPath("~")}
            >
              🏠:/
            </Button>
            <Button
              component={Link}
              to={currPath}
              {...globalNavButtonProps}
              sx={{ ...globalNavButtonProps.sx, padding: 0 }}
              onMouseEnter={() => setHoverPath("/" + currPath)}
            >
              {currPath + "/"}
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
              >
                {subPath + "/"}
              </Button>
            )}
            <Button className="Nav-link__no-events" {...globalNavButtonProps}>
              ~$
            </Button>
            {!isMobile && (
              <Button
                className="Nav-link__no-events"
                {...globalNavButtonProps}
                sx={{
                  ...globalNavButtonProps.sx,
                  color: theme.vars.palette.primary.light,
                  justifyContent: "flex-start",
                  padding: "0 5px 0 25px",
                }}
              >
                {hoverText}
              </Button>
            )}
          </Box>
        </StyledBox>
      )}
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
            >
              <SubdirectoryArrowRightTwoToneIcon />
              about
            </Button>
            <Button
              ref={drawerProjectButtonRef}
              className="Nav-link__no-events"
              {...globalNavButtonProps}
              {...bindTrigger(popupState)}
              sx={{
                ...globalNavButtonProps.sx,
                ...globalNavDrawerButtonStyles,
                color: theme.vars.palette.primary.dark,
              }}
              onMouseEnter={() => setHoverPath("/projects")}
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
