import { Button, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";

import HoverMenu from "material-ui-popup-state/HoverMenu";
import React from "react";
import { Link } from "react-router-dom";
import { navLinkButtonProps } from "../mui/components/muiButton";

const paths = [
  {
    path: "/about",
    text: "about",
    subpaths: [],
  },
  {
    path: "/projects",
    text: "projects",
    subpaths: [
      { path: "projects/personal", text: "personal" },
      { path: "projects/academic", text: "academic" },
    ],
  },
  {
    path: "/contact",
    text: "contact",
    subpaths: [],
  },
];

const NavLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const popupState = usePopupState({
    variant: "popover",
    popupId: "subPathMenu",
  });

  return (
    <>
      {paths.map((path, index) => {
        return (
          <>
            {path.subpaths.length !== 0 ? (
              <>
                <Button
                  key={`${path.text}`}
                  component={Link}
                  to={path.path}
                  {...navLinkButtonProps}
                  {...bindHover(popupState)}
                  aria-label={`Landing page navigation to ${path.text} page.`}
                >
                  {path.text}
                </Button>
                <HoverMenu
                  {...bindMenu(popupState)}
                  anchorOrigin={
                    isMobile
                      ? { vertical: "top", horizontal: "right" }
                      : { vertical: "bottom", horizontal: "left" }
                  }
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  {path.subpaths.map((subPath, i) => {
                    return (
                      <MenuItem>
                        <Button
                          key={`${subPath.text}-${i}`}
                          component={Link}
                          to={subPath.path}
                          {...navLinkButtonProps}
                          aria-label={`Landing page navigation dropdown sub-menu to ${path.text} ${subPath.text} page.`}
                        >
                          {subPath.text}
                        </Button>
                      </MenuItem>
                    );
                  })}
                </HoverMenu>
              </>
            ) : (
              <Button
                key={`${path.text}-${index}`}
                component={Link}
                to={path.path}
                {...navLinkButtonProps}
                aria-label={`Landing page navigation to ${path.text} page.`}
              >
                {path.text}
              </Button>
            )}
          </>
        );
      })}
    </>
  );
};

export default NavLinks;
