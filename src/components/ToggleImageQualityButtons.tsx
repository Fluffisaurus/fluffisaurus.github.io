import * as React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SdTwoToneIcon from "@mui/icons-material/SdTwoTone";
import HdTwoToneIcon from "@mui/icons-material/HdTwoTone";
import FourKTwoToneIcon from "@mui/icons-material/FourKTwoTone";
import { toast } from "react-toastify";

function ToggleImageQualityButtons() {
  const [imgQuality, setImgQuality] = React.useState<string | null>("high");

  const handleToggleImgQuality = (
    event: React.MouseEvent<HTMLElement>,
    newImgQuality: string | null
  ) => {
    if (newImgQuality) {
      setImgQuality(newImgQuality);
      toast.success(`Image quality: ${newImgQuality}`);
    } else {
      setImgQuality("high");
      toast.success(`Image quality: default (high)`);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={imgQuality}
        exclusive
        onChange={handleToggleImgQuality}
        aria-label="image quality toggle"
      >
        <ToggleButton value="low" aria-label="low image quality">
          <SdTwoToneIcon />
        </ToggleButton>
        <ToggleButton value="medium" aria-label="medium image quality">
          <HdTwoToneIcon />
        </ToggleButton>
        <ToggleButton value="high" aria-label="high image quality">
          <FourKTwoToneIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleImageQualityButtons;
