/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/components/toolbar/index.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { useFullscreen } from "@embedpdf/plugin-fullscreen/react";
import { useExportCapability } from "@embedpdf/plugin-export/react";

import ZoomControls from "./ZoomControls";

const PdfToolbar = () => {
  const { provides: fullscreenProvider, state: fullscreenState } =
    useFullscreen();
  const { provides: exportProvider } = useExportCapability();

  const handleFullscreenToggle = () => {
    fullscreenProvider?.toggleFullscreen();
  };

  const handleDownload = () => {
    exportProvider?.download();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" disableGutters sx={{ gap: 1.5, px: 1.5 }}>
          <ZoomControls />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleDownload}>
              <ListItemIcon>
                <DownloadOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Download</ListItemText>
            </Button>
            <Button onClick={handleFullscreenToggle}>
              <ListItemIcon>
                {fullscreenState.isFullscreen ? (
                  <FullscreenExitOutlinedIcon fontSize="small" />
                ) : (
                  <FullscreenOutlinedIcon fontSize="small" />
                )}
              </ListItemIcon>
              <ListItemText>
                {fullscreenState.isFullscreen
                  ? "Exit Fullscreen"
                  : "Fullscreen"}
              </ListItemText>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PdfToolbar;
