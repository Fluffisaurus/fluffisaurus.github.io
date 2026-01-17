/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/components/toolbar/index.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FullscreenTwoToneIcon from "@mui/icons-material/FullscreenTwoTone";
import FullscreenExitTwoToneIcon from "@mui/icons-material/FullscreenExitTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";

import { useFullscreen } from "@embedpdf/plugin-fullscreen/react";
import {
  ExportCapability,
  useExportCapability,
} from "@embedpdf/plugin-export/react";

import { toast, ToastContentProps } from "react-toastify";
import ZoomControls from "./ZoomControls";
import theme from "../../mui/theme";
import { muiButtonGlobalNavFontSizes } from "../../mui/components/muiButton";

export const StyledIconButton = styled(IconButton)({
  muiButtonGlobalNavFontSizes,
  color: theme.vars.palette.background.globalNav,
  padding: "10px",
  "&:hover": {
    backgroundColor: theme.vars.palette.secondary.main,
  },
});

export const StyledButton = styled(Button)({
  border: "2px",
  borderColor: theme.vars.palette.secondary.main,
});

type DownloadConfirmationProps = ToastContentProps & {
  exportProvider?: ExportCapability | null;
};

const DownloadConfirmation = (props: DownloadConfirmationProps) => {
  const { closeToast, exportProvider } = props;

  function downloadConfirmed() {
    exportProvider?.download?.();
  }

  return (
    <Box sx={{ margin: "auto" }}>
      <Typography variant="body1">Would you like to download?</Typography>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ paddingTop: "10px" }}
      >
        <StyledButton onClick={downloadConfirmed} size="large">
          Yes
        </StyledButton>
        <StyledButton onClick={closeToast} size="large">
          No
        </StyledButton>
      </Grid>
    </Box>
  );
};

const PdfToolbar = ({ documentId }: { documentId: string }) => {
  const { provides: fullscreenProvider, state: fullscreenState } =
    useFullscreen();
  const { provides: exportProvider } = useExportCapability();

  const handleFullscreenToggle = () => {
    fullscreenProvider?.toggleFullscreen();
  };

  const handleDownload = () => {
    toast.info(
      (props: ToastContentProps) => (
        <DownloadConfirmation exportProvider={exportProvider} {...props} />
      ),
      {
        autoClose: 8000,
      }
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            backgroundColor: theme.vars.palette.primary.dark,
            padding: "5px 8px 5px 8px",
          }}
        >
          <ZoomControls documentId={documentId} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "auto",
            }}
          >
            <StyledIconButton onClick={handleDownload}>
              <DownloadTwoToneIcon />
            </StyledIconButton>
            <StyledIconButton onClick={handleFullscreenToggle}>
              {fullscreenState.isFullscreen ? (
                <FullscreenExitTwoToneIcon />
              ) : (
                <FullscreenTwoToneIcon />
              )}
            </StyledIconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PdfToolbar;
