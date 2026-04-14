import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import { ANI_CONST, ImageQuality } from "./styled/constants";

const Loading = lazy(() => import("../pages/Loading"));
const GlobalNav = lazy(() => import("../components/GlobalNav"));
const CustomRoutes = lazy(() => import("./CustomRoutes"));
const HoverProvider = lazy(() => import("../providers/HoverProvider"));

const StyledAppContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const StyledContainer = {
  height: "100%",
  display: "flex",
};

const StyledContainerOpen = {
  padding: `${ANI_CONST.GLOBAL_NAV_HEIGHT}px 5% ${ANI_CONST.GLOBAL_NAV_HEIGHT}px 5%`,
  height: "100%",
  width: "100%",
};

const App = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const background = location.state && (location.state as any).background;
  const [imgQuality, setImgQuality] = useState<ImageQuality>("best");

  useEffect(() => {
    // clean up on unmount
    localStorage.removeItem("--grow-animatedOnLoad");
    localStorage.removeItem("--slide-animatedOnLoad");
    localStorage.removeItem("--speedDial-onboard");
  }, []);

  return (
    <Box sx={StyledAppContainer}>
      <Suspense fallback={<Loading />}>
        <HoverProvider>
          <GlobalNav imgQuality={imgQuality} setImgQuality={setImgQuality} />
          <Box
            sx={[
              StyledContainer,
              location.pathname != "/" && StyledContainerOpen,
            ]}
            role="main"
          >
            <CustomRoutes background={background} imgQuality={imgQuality} />
          </Box>
        </HoverProvider>
      </Suspense>
    </Box>
  );
};

export default App;
