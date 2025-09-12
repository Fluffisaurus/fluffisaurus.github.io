import * as React from "react";

import Grow from "@mui/material/Grow";

export interface GrowWrapperProps {
  children: React.ReactNode;
}

const GrowWrapper = ({ children }: GrowWrapperProps) => {
  const [animatedOnLoad, setAnimatedOnLoad] = React.useState(() => {
    return !!localStorage.getItem("animatedOnLoad");
  });
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    if (!animatedOnLoad) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000); // wait until page is loaded
      setAnimatedOnLoad(true);
      localStorage.setItem("animatedOnLoad", "true");
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <Grow in={showContent} timeout={1000} style={{ transformOrigin: "0 0 0" }}>
      <div>{children}</div>
    </Grow>
  );
};

export default GrowWrapper;
