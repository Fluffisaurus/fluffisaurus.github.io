import * as React from "react";
import loadable from "@loadable/component";

import {
  Box,
  Card,
  CardActionArea,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { ProjectImage } from "../../content/projects/interfaces";
import {
  CarouselActionCardContentProps,
  CarouselStyles,
  ImageQualityProps,
} from "./constants";

const CloudinaryCustomImage = loadable(
  () => import("../CloudinaryCustomImage")
);

interface CarouselCardProps
  extends CarouselActionCardContentProps,
    ImageQualityProps {
  item: ProjectImage;
}

const CardContent = (props: CarouselCardProps) => {
  const { item, width, height, imgQuality } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imgWidth = isMobile ? width.width.xs : width.width.md;
  return (
    <Box sx={{ width: width, ...CarouselStyles.wrapperBox }}>
      <CloudinaryCustomImage
        src={item.src}
        width={imgWidth}
        height={height}
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
          <CardContent {...props} />
        </CardActionArea>
      ) : (
        <CardContent {...props} />
      )}
    </Card>
  );
};

export default CarouselCard;
