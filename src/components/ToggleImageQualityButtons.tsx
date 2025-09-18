import * as React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SdTwoToneIcon from "@mui/icons-material/SdTwoTone";
import HdTwoToneIcon from "@mui/icons-material/HdTwoTone";
import FourKTwoToneIcon from "@mui/icons-material/FourKTwoTone";
import { toast } from "react-toastify";
import { ImageQuality, ImageQualityProps } from "./styled/constants";

function ToggleImageQualityButtons({
  imgQuality,
  setImgQuality,
}: ImageQualityProps) {
  const handleToggleImgQuality = (
    event: React.MouseEvent<HTMLElement>,
    newImgQuality: ImageQuality | null
  ) => {
    if (setImgQuality) {
      if (newImgQuality) {
        setImgQuality(newImgQuality);
        toast.success(`Image quality: ${newImgQuality}`);
      } else {
        setImgQuality("best");
        toast.success(`Image quality: default (best)`);
      }
    } else {
      // this should never happen b/c it's always passed as a prop
      console.error("setImgQuality was never passed as a prop");
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
        <ToggleButton value="good" aria-label="good image quality">
          <HdTwoToneIcon />
        </ToggleButton>
        <ToggleButton value="best" aria-label="best image quality">
          <FourKTwoToneIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleImageQualityButtons;
