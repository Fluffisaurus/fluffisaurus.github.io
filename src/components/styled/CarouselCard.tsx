import * as React from "react";
import loadable from "@loadable/component";

import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { ProjectImage } from "../../content/projects/interfaces";
import {
  CarouselActionCardContentProps,
  CarouselStyles,
  ImageQualityProps,
} from "./constants";
import resolveDimensionValue from "../../utils/breakpoints";

const CloudinaryCustomImage = loadable(
  () => import("../CloudinaryCustomImage")
);

interface CarouselCardProps
  extends CarouselActionCardContentProps,
    ImageQualityProps {
  item: ProjectImage;
}

const CarouselCardContent = (props: CarouselCardProps) => {
  const { item, width, height, imgQuality } = props;
  const imgWidth = resolveDimensionValue(width);
  const imgHeight = resolveDimensionValue(height);
  return (
    <Box sx={{ width: width, ...CarouselStyles.wrapperBox }}>
      <CloudinaryCustomImage
        src={item.src}
        width={imgWidth}
        height={imgHeight}
        imgQuality={imgQuality}
      />
      <Box sx={{ ...CarouselStyles.textOverlayBox }}>
        <Typography variant="caption">{item.description}</Typography>
      </Box>
    </Box>
  );
};

const CarouselCard = (props: CarouselCardProps) => {
  const { height, cardActionArea } = props;
  const location = useLocation();
  return (
    <Card sx={{ height: height, ...CarouselStyles.card }}>
      {cardActionArea ? (
        <CardActionArea
          component={Link}
          to={cardActionArea}
          state={{ background: location }}
        >
          <CarouselCardContent {...props} />
        </CardActionArea>
      ) : (
        <CarouselCardContent {...props} />
      )}
    </Card>
  );
};

export default CarouselCard;
