/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/components/zoom-controls/index.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";

import ZoomInTwoToneIcon from "@mui/icons-material/ZoomInTwoTone";
import ZoomOutTwoToneIcon from "@mui/icons-material/ZoomOutTwoTone";
import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import WidthFullIcon from "@mui/icons-material/WidthFull";

import { useZoom } from "@embedpdf/plugin-zoom/react";
import { ZoomLevel, ZoomMode } from "@embedpdf/plugin-zoom";

import { isSmallScreen } from "../../utils/breakpoints";
import { StyledIconButton } from "./PdfToolbar";
import theme from "../../mui/theme";

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
  { value: 0.75, label: "75%" },
  { value: 1, label: "100%" },
  { value: 1.25, label: "125%" },
  { value: 1.5, label: "150%" },
  { value: 1.75, label: "175%" },
  { value: 2, label: "200%" },
];

const ZOOM_MODES: ZoomModeItem[] = [
  { value: ZoomMode.FitPage, label: "Fit to Page", icon: WidthNormalIcon },
  { value: ZoomMode.FitWidth, label: "Fit to Width", icon: WidthFullIcon },
] as const;

function getNextZoomStep(curr: number, returnUpperBound: boolean): number {
  if (curr < 0.25) {
    return 0.25;
  } else if (curr >= 0.25 && curr < 0.5) {
    return returnUpperBound ? 0.5 : 0.25;
  } else if (curr >= 0.5 && curr < 0.75) {
    return returnUpperBound ? 0.75 : 0.5;
  } else if (curr >= 0.75 && curr < 1) {
    return returnUpperBound ? 1 : 0.75;
  } else if (curr >= 1 && curr < 1.25) {
    return returnUpperBound ? 1.25 : 1;
  } else if (curr >= 1.25 && curr < 1.5) {
    return returnUpperBound ? 1.5 : 1.25;
  } else if (curr >= 1.5 && curr < 1.75) {
    return returnUpperBound ? 1.75 : 1.5;
  } else if (curr >= 1.75 && curr < 2) {
    return returnUpperBound ? 2 : 1.75;
  } else {
    return 2;
  }
}

const StyledMenuItem = styled(MenuItem)({
  padding: "5px 10px 5px 10px",
  height: "fit-content",
  ":hover": {
    backgroundColor: theme.vars.palette.secondary.main,
  },
  "&.Mui-selected": {
    // Style for selected menu items
    backgroundColor: theme.vars.palette.secondary.main,
  },
});

const ZoomControls = ({ documentId }: { documentId: string }) => {
  const { state, provides } = useZoom(documentId);
  const isMobile = isSmallScreen();

  const handleSelect = (value: ZoomLevel) => {
    provides?.requestZoom(value);
  };

  const handleZoomIn = () => {
    if (typeof state.zoomLevel != "number") {
      // get next zoom point from 0.25 intervals based on
      // state.currentZoomLevel which returns a number
      const nextZoomStep = getNextZoomStep(state.currentZoomLevel, true);
      provides?.requestZoom(nextZoomStep);
    } else {
      provides?.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (typeof state.zoomLevel != "number") {
      // get next zoom point from 0.25 intervals based on
      // state.currentZoomLevel which returns a number
      const nextZoomStep = getNextZoomStep(state.currentZoomLevel, false);
      provides?.requestZoom(nextZoomStep);
    } else {
      provides?.zoomOut();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {!isMobile && (
          <FormControl sx={{ minWidth: "150px" }} size="small">
            <InputLabel
              id="pdf-zoom-percent-select-label"
              sx={{
                color: theme.vars.palette.background.globalNav,
                borderColor: theme.vars.palette.background.paper,
              }}
            >
              Zoom %
            </InputLabel>
            <Select
              labelId="pdf-zoom-percent-select-label"
              id="pdf-zoom-percent-select"
              label="Zoom Percentage"
              value={state.zoomLevel}
              onChange={() => handleSelect}
              sx={{
                display: "flex",
                flexDirection: "row",
                color: theme.vars.palette.background.globalNav,
              }}
            >
              {ZOOM_PRESETS.map(({ value, label }) => (
                <StyledMenuItem
                  key={value}
                  value={value}
                  onClick={() => handleSelect(value)}
                  selected={Math.abs(state.currentZoomLevel - value) < 0.01}
                >
                  {label}
                </StyledMenuItem>
              ))}
              <Divider />
              {ZOOM_MODES.map(({ value, label }) => (
                <StyledMenuItem
                  key={value}
                  value={value}
                  onClick={() => handleSelect(value)}
                  selected={state.zoomLevel === value}
                >
                  {label}
                </StyledMenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <StyledIconButton onClick={handleZoomOut} aria-label="zoom out">
          <ZoomOutTwoToneIcon />
        </StyledIconButton>
        <StyledIconButton onClick={handleZoomIn} aria-label="zoom in">
          <ZoomInTwoToneIcon />
        </StyledIconButton>
      </Box>
    </>
  );
};

export default ZoomControls;
