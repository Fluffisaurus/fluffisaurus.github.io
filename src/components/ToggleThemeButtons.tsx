import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { toast } from "react-toastify";

import { useHoverDispatch } from "../providers/HoverProvider";
import capitalize from "../utils/capitalize";

type Mode = "light" | "dark" | "system";
interface ToggleThemeButtonsProps {
  mode: "light" | "dark" | "system" | undefined;
  setMode: (mode: Mode | null) => void;
}

const ToggleThemeButtons = ({ mode, setMode }: ToggleThemeButtonsProps) => {
  const handleToggleTheme = (
    event: React.MouseEvent<HTMLElement>,
    newThemeMode: Mode | null
  ) => {
    setMode(newThemeMode);

    if (newThemeMode)
      toast.success(`Theme Mode: ${capitalize(newThemeMode)}`, {
        containerId: "toast-container",
        theme: newThemeMode,
      });
  };

  const dispatch = useHoverDispatch();

  return (
    <ToggleButtonGroup
      value={mode}
      defaultValue={mode} // currently set in themeprovider to light
      exclusive
      onChange={handleToggleTheme}
      aria-label="theme mode toggle"
    >
      <ToggleButton
        value="light"
        aria-label="light mode"
        onMouseEnter={() =>
          dispatch({ type: "onCommand", command: "set theme-mode light" })
        }
        onMouseLeave={() => dispatch({ type: "onCommand", command: undefined })}
      >
        <LightModeTwoToneIcon />
      </ToggleButton>
      <ToggleButton
        value="dark"
        aria-label="dark mode"
        onMouseEnter={() =>
          dispatch({ type: "onCommand", command: "set theme-mode dark" })
        }
        onMouseLeave={() => dispatch({ type: "onCommand", command: undefined })}
      >
        <DarkModeTwoToneIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleThemeButtons;
