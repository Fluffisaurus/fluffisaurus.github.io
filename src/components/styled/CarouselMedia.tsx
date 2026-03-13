import * as React from "react";
import loadable from "@loadable/component";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

import { ProjectImage } from "../../content/projects/interfaces";
import {
  CarouselActionMediaContentProps,
  CarouselStyles,
  ImageQualityProps,
} from "./constants";
import resolveDimensionValue from "../../utils/breakpoints";

const CloudinaryCustomImage = loadable(
  () => import("../CloudinaryCustomImage")
);

interface CarouselMediaProps
  extends CarouselActionMediaContentProps,
    ImageQualityProps {
  item: ProjectImage;
  projectName: string;
}

const CarouselMediaContent = (props: CarouselMediaProps) => {
  const { item, projectName, width, height, imgQuality } = props;
  const imgWidth = resolveDimensionValue(width);
  const imgHeight = resolveDimensionValue(height);
  return (
    <Box sx={{ width: width, ...CarouselStyles.wrapperBox }}>
      <CloudinaryCustomImage
        src={item.src}
        alt={`${projectName}: ${item.description}`}
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

const CarouselMedia = (props: CarouselMediaProps) => {
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
          <CarouselMediaContent {...props} />
        </CardActionArea>
      ) : (
        <CarouselMediaContent {...props} />
      )}
    </Card>
  );
};

export default CarouselMedia;
