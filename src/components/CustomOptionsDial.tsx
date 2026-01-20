import * as React from "react";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material"; // eslint-disable-line no-restricted-imports
import Backdrop from "@mui/material/Backdrop";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";

import ToggleThemeButtons from "./ToggleThemeButtons";
import ToggleImageQualityButtons from "./ToggleImageQualityButtons";
import { ANI_CONST, ImageQualityProps } from "./styled/constants";
import { Slide, toast, ToastContainer } from "react-toastify";
import { isSmallScreen } from "../utils/breakpoints";

interface DialActions {
  icon: JSX.Element;
  name: string;
}

interface CustomOptionsDialProps extends ImageQualityProps {
  dims: { width: number; height: number };
}

export default function CustomOptionsDial(props: CustomOptionsDialProps) {
  const { imgQuality, setImgQuality, dims } = props;
  const { mode, systemMode, setMode } = useColorScheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions: DialActions[] = [
    {
      icon: (
        <ToggleImageQualityButtons
          imgQuality={imgQuality}
          setImgQuality={setImgQuality}
        />
      ),
      name: "Image Quality",
    },
    {
      icon: <ToggleThemeButtons mode={mode} setMode={setMode} />,
      name: "Theme Mode",
    },
  ];

  const smallScreen = isSmallScreen();

  // Note: --speedDial-onboard is cleared after <App/> unmount
  //       to re-enable functionality, remove that line
  const [initialLoad, setInitialLoad] = React.useState(() => {
    return !!localStorage.getItem("--speedDial-onboard");
  });
  React.useEffect(() => {
    if (!initialLoad) {
      // first load
      toast.info(
        <Typography
          variant="body1"
          sx={{
            margin: "auto",
            paddingLeft: "5px",
            paddingRight: "15px",
          }}
        >
          Customize your experience
        </Typography>,
        {
          containerId: "toast-container",
          toastId: "onboarding-toast",
          position: "top-right",
          delay: ANI_CONST.OPTIONS_DIAL_DELAY,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          draggableDirection: "y",
          style: {
            right: smallScreen ? "25px" : "10px",
            top: smallScreen ? "60px" : "45px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: 0,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            width: smallScreen ? "280px" : "fit-content",
          },
        }
      );
      setInitialLoad(true);
      localStorage.setItem("--speedDial-onboard", "true");
    }
  }, []);

  return (
    <>
      <Backdrop open={open} sx={{ zIndex: ANI_CONST.ZINDEX.BACKDROP }} />
      <ToastContainer
        containerId="toast-container"
        position="bottom-left"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode == "system" ? systemMode : mode}
        transition={Slide}
        style={{ zIndex: ANI_CONST.ZINDEX.TOAST }}
      />
      <Box
        sx={{
          position: "absolute",
          top: dims.height / 2,
          right: 0,
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          zIndex: ANI_CONST.ZINDEX.OPTIONS_DIAL,
        }}
      >
        <SpeedDial
          ariaLabel="website options dial for theme mode and image quality"
          sx={{ ...dims }}
          icon={
            <SpeedDialIcon
              icon={<SettingsOutlinedIcon />}
              openIcon={<DisplaySettingsTwoToneIcon />}
            />
          }
          direction="down"
          onOpen={handleOpen}
          onClose={handleClose}
          onMouseEnter={() =>
            toast.dismiss({
              containerId: "toast-container",
              id: "onboarding-toast",
            })
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                  open: true,
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
