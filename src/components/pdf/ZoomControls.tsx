/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/components/zoom-controls/index.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import { useState, MouseEvent, Fragment } from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import WidthFullIcon from "@mui/icons-material/WidthFull";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";

import { useZoom } from "@embedpdf/plugin-zoom/react";
import { ZoomLevel, ZoomMode } from "@embedpdf/plugin-zoom";

import { isSmallScreen } from "../../utils/breakpoints";

interface ZoomModeItem {
  value: ZoomLevel;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}

interface ZoomPresetItem {
  value: number;
  label: string;
}

const ZOOM_PRESETS: ZoomPresetItem[] = [
  { value: 0.25, label: "25%" },
  { value: 0.5, label: "50%" },
  { value: 1, label: "100%" },
  { value: 1.5, label: "150%" },
  { value: 2, label: "200%" },
];

const ZOOM_MODES: ZoomModeItem[] = [
  { value: ZoomMode.FitPage, label: "Fit to Page", icon: WidthNormalIcon },
  { value: ZoomMode.FitWidth, label: "Fit to Width", icon: WidthFullIcon },
] as const;

const ZoomControls = () => {
  const { state, provides } = useZoom();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = isSmallScreen();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: ZoomLevel) => {
    provides?.requestZoom(value);
    handleClose();
  };

  const handleZoomIn = () => {
    provides?.zoomIn();
    handleClose();
  };

  const handleZoomOut = () => {
    provides?.zoomOut();
    handleClose();
  };

  const zoomPercentage = Math.round(state.currentZoomLevel * 100);

  return (
    <Fragment>
      {isMobile ? (
        <IconButton sx={{ color: "white", p: 0.4 }} onClick={handleClick}>
          <AddCircleOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      ) : (
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 1,
            pl: 1,
            pr: 0.3,
            py: 0.3,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
            {zoomPercentage}%
          </Typography>
          <IconButton sx={{ color: "white", p: 0.4 }} onClick={handleClick}>
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleZoomOut}
            edge="start"
            size="small"
            sx={{ color: "white", p: 0.4 }}
            aria-label="zoom out"
          >
            <RemoveCircleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleZoomIn}
            edge="start"
            size="small"
            sx={{ color: "white", p: 0.4 }}
            aria-label="zoom in"
          >
            <AddCircleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disablePortal
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleZoomIn}>
          <ListItemIcon>
            <ZoomInOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Zoom In</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleZoomOut}>
          <ListItemIcon>
            <ZoomOutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Zoom Out</ListItemText>
        </MenuItem>
        <Divider />
        {ZOOM_PRESETS.map(({ value, label }) => (
          <MenuItem
            key={value}
            onClick={() => handleSelect(value)}
            selected={Math.abs(state.currentZoomLevel - value) < 0.01}
          >
            {label}
          </MenuItem>
        ))}
        <Divider />
        {ZOOM_MODES.map(({ value, label, icon: Icon }) => (
          <MenuItem
            key={value}
            onClick={() => handleSelect(value)}
            selected={state.zoomLevel === value}
          >
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default ZoomControls;
