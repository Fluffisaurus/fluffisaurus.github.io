import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

import {
  CarouselActionCardContentProps,
  CarouselCardContentProps,
  CarouselStyles,
} from "./constants";

const PlaceholderCardContent = (props: CarouselCardContentProps) => {
  const { width, height } = props;
  const isNum = typeof width == "number";
  return (
    <Box
      sx={{
        width: isNum ? width : { ...width.width },
        ...CarouselStyles.wrapperBox,
      }}
    >
      <PhotoLibraryTwoToneIcon
        sx={{
          width: isNum ? width : { ...width.width },
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

const CarouselPlaceholderCard = (props: CarouselActionCardContentProps) => {
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

export default CarouselPlaceholderCard;
