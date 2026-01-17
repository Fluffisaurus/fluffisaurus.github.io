import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";

const Loading: React.FunctionComponent = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" fontSize={32}>
          <TypeAnimation
            key={"loading-screen"}
            sequence={[500, "loading...", 1500, "loading"]}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            repeat={Infinity}
          />
        </Typography>
      </Box>
    </>
  );
};

export default Loading;
