import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import { ImageQuality } from "./styled/constants";

const Loading = lazy(() => import("../pages/Loading"));
const GlobalNav = lazy(() => import("../components/GlobalNav"));
const CustomRoutes = lazy(() => import("./CustomRoutes"));
const HoverPathProvider = lazy(() => import("../providers/HoverPathProvider"));

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
    <Box className="App">
      <Suspense fallback={<Loading />}>
        <HoverPathProvider>
          <GlobalNav imgQuality={imgQuality} setImgQuality={setImgQuality} />
          <Box
            className={
              location.pathname == "/"
                ? "Container"
                : "Container Container--open"
            }
          >
            <CustomRoutes background={background} imgQuality={imgQuality} />
          </Box>
        </HoverPathProvider>
      </Suspense>
    </Box>
  );
};

export default App;
