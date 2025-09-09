import { Button, MenuItem } from "@mui/material";
import { bindHover, bindMenu, usePopupState } from "material-ui-popup-state/hooks";

import HoverMenu from 'material-ui-popup-state/HoverMenu'
import React from "react";
import { Link } from "react-router-dom";
import { muiButtonNavlinkFontSizes } from "../mui/components/muiButton";

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
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'subPathMenu',
  })

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
                  size="large" 
                  variant="navlink"
                  {...bindHover(popupState)}
                  sx={{...muiButtonNavlinkFontSizes}}
                >
                  {path.text}
                </Button>
                <HoverMenu
                  {...bindMenu(popupState)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  {path.subpaths.map((subPath, i) => {
                    return(
                      <MenuItem>
                        <Button key={`${subPath.text}-${i}`} component={Link} to={subPath.path} size="large" variant="navlink" sx={{...muiButtonNavlinkFontSizes}}>
                          {subPath.text}
                        </Button>
                      </MenuItem>
                    );
                  })}
                </HoverMenu>
              </>
            ) : (
              <Button key={`${path.text}-${index}`} component={Link} to={path.path} size="large" variant="navlink" sx={{...muiButtonNavlinkFontSizes}}>
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
