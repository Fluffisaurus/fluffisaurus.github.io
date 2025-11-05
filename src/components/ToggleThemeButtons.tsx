import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

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
  };

  return (
    <ToggleButtonGroup
      value={mode}
      defaultValue={mode} // currently set in themeprovider to light
      exclusive
      onChange={handleToggleTheme}
      aria-label="theme mode toggle"
    >
      <ToggleButton value="light" aria-label="light mode">
        <LightModeTwoToneIcon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark mode">
        <DarkModeTwoToneIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleThemeButtons;
