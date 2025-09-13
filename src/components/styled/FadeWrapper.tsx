import * as React from "react";

import Fade from "@mui/material/Fade";
import { ANI_CONST, GenericWrapperProps } from "./constants";
import { easing } from "@mui/material";

const FadeWrapper = ({ children, delay, timeout }: GenericWrapperProps) => {
  const [showContent, setShowContent] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade
      in={delay ? showContent : true}
      timeout={timeout ? timeout : ANI_CONST.WRAPPER_FADE_WRAPPER_DELAY}
      easing={{ enter: easing.sharp, exit: easing.easeOut }}
    >
      <div>{children}</div>
    </Fade>
  );
};

export default FadeWrapper;
