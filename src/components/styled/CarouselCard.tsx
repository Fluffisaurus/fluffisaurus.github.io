import * as React from "react";

import {
  Box,
  Card,
  CardActionArea,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";
import getCloudinaryInstance, { getDesiredQuality } from "../Cloudinary";
import { Link, useLocation } from "react-router-dom";

import { ProjectImage } from "../../content/projects/interfaces";
import {
  CarouselActionCardContentProps,
  CarouselStyles,
  ImageQualityProps,
} from "./constants";

interface CarouselCardProps
  extends CarouselActionCardContentProps,
    ImageQualityProps {
  item: ProjectImage;
}

const CardContent = (props: CarouselCardProps) => {
  const { item, width, height, imgQuality } = props;
  const cld = getCloudinaryInstance;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imgWidth = isMobile ? width.width.xs : width.width.md;
  return (
    <Box sx={{ width: width, ...CarouselStyles.wrapperBox }}>
      <AdvancedImage
        cldImg={cld
          .image(`portfolio/${item.src}`)
          .resize(fit(imgWidth, height))
          .quality(getDesiredQuality(imgQuality))}
        plugins={[placeholder({ mode: "blur" }), responsive()]}
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
