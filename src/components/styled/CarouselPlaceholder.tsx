import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

import {
  CarouselActionMediaContentProps,
  CarouselMediaContentProps,
  CarouselStyles,
} from "./constants";

const PlaceholderCardContent = (props: CarouselMediaContentProps) => {
  const { width, height } = props;
  return (
    <Box
      sx={{
        width,
        ...CarouselStyles.wrapperBox,
      }}
    >
      <PhotoLibraryTwoToneIcon
        sx={{
          width,
          height,
        }}
      />
      <Box sx={{ ...CarouselStyles.textOverlayBox }}>
        <Typography variant="caption">
          Photo not availble at the moment.
        </Typography>
      </Box>
    </Box>
  );
};

const CarouselPlaceholder = (props: CarouselActionMediaContentProps) => {
  const { width, height, cardActionArea } = props;
  const location = useLocation();
  return (
    <Card sx={{ height: height, ...CarouselStyles.card }}>
      {cardActionArea ? (
        <CardActionArea
          component={Link}
          to={cardActionArea}
          state={{ background: location }}
        >
          <PlaceholderCardContent width={width} height={height} />
        </CardActionArea>
      ) : (
        <PlaceholderCardContent width={width} height={height} />
      )}
    </Card>
  );
};

export default CarouselPlaceholder;
