import * as React from "react";
import loadable from "@loadable/component";

import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

import { ProjectImage } from "../../content/projects/interfaces";
import {
  CarouselMediaContentProps,
  CarouselActionMediaContentProps,
  ImageQualityProps,
  CarouselStyles,
} from "./constants";
import resolveDimensionValue from "../../utils/breakpoints";

const CloudinaryCustomImage = loadable(
  () => import("../CloudinaryCustomImage")
);

interface CarouselMediaProps
  extends CarouselActionMediaContentProps,
    ImageQualityProps {
  item?: ProjectImage;
  projectName?: string;
}

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
          Photo not currently available.
        </Typography>
      </Box>
    </Box>
  );
};

const CarouselMediaContent = (props: CarouselMediaProps) => {
  const { item, projectName, width, height, imgQuality } = props;
  const imgWidth = resolveDimensionValue(width);
  const imgHeight = resolveDimensionValue(height);

  if (!item) throw new Error("Can't call Cloudinary with no item");

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

const CarouselContent = (props: CarouselMediaProps) => {
  const { isPlaceholder, width, height, cardActionArea } = props;
  const location = useLocation();

  return (
    <Card sx={{ height: height, ...CarouselStyles.card }}>
      {isPlaceholder ? (
        <PlaceholderCardContent width={width} height={height} />
      ) : cardActionArea ? (
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

export default CarouselContent;
