import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/global-nav.scss";
import { Box, Button, Menu, useMediaQuery, useTheme } from "@mui/material";
import { globalNavButtonProps } from "../mui/components/muiButton";
import { bindMenu } from "material-ui-popup-state";
import { bindTrigger, usePopupState } from "material-ui-popup-state/hooks";

interface GlobalNavProps {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalNav = ({
  toggleNav,
  setToggleNav,
}: GlobalNavProps) => {
  const location = useLocation();
  const [currPath, setCurrPath] = useState<string>("");
  const [subPath, setSubPath] = useState<string | null>();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'globalNavPopup',
  })

  useEffect(() => {
    if (location.pathname === "/") {
      setToggleNav(false);
      popupState.close();
    } else{
      setToggleNav(true);
    } 

    if (location.pathname.substring(1).includes("/")) {
      setCurrPath(location.pathname.substring(1).split("/")[0]);
      setSubPath(location.pathname.substring(1).split("/")[1]);
    } else {
      setCurrPath(location.pathname.substring(1));
      setSubPath(null);
    }
  }, [location]);

  return (
    <>
      {toggleNav && (
        <Box className="Global-nav">
          <Box className="Global-nav__root">
            <Button component={Link} to={"/"} {...globalNavButtonProps}>🏠:/</Button>
            <Button className="Nav-link--active" component={Link} to={currPath} {...globalNavButtonProps}>
              {currPath + "/"}
            </Button>
            {subPath && (
              <Button className="Nav-link--active" component={Link} to={currPath + "/" + subPath} {...globalNavButtonProps}>
                {subPath + "/"}
              </Button>
            )}
            <Button className="Nav-link__no-events" {...globalNavButtonProps}>~$</Button>
          </Box>
          <Box className="Global-nav__options">
            {
              isMobile 
              ? (
                <></>
              ) 
              : (
                <>
                  <Button component={Link} to={"/about"} {...globalNavButtonProps}> about</Button>
                  <Button {...globalNavButtonProps} {...bindTrigger(popupState)}> projects/</Button>
                  <Menu {...bindMenu(popupState)} anchorOrigin={{vertical: 'bottom', horizontal: "left"}} transformOrigin={{ vertical: 'top', horizontal: 'left' }} >
                    <Button component={Link} to={"/projects"} {...globalNavButtonProps}>./</Button>
                    <Button component={Link} to={"/projects/personal"} {...globalNavButtonProps}>personal</Button>
                    <Button component={Link} to={"/projects/academic"} {...globalNavButtonProps}>academic</Button>
                  </Menu>
                  <Button component={Link} to={"/contact"} {...globalNavButtonProps}> contact</Button>
                </>
              )
            }
          </Box>
        </Box>
      )}
    </>
  );
};

export default GlobalNav;
