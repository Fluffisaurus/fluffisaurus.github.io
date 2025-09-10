import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";

import { Project } from "../content/projects/interfaces";
import getCloudinaryInstance from "./Cloudinary";
import { Link, useLocation } from "react-router-dom";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

interface ProjectCarouselProps {
  proj: Project;
  width: Record<string, Record<string, number>>;
  height: number | string;
}

export const carouselStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  outerBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  textOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    bgcolor: "rgba(0, 0, 0, 0.54)",
    color: "white",
    padding: "10px",
  },
};

const PlaceholderCard = ({ proj, width, height }: ProjectCarouselProps) => {
  const location = useLocation();
  return (
    <Card sx={{ minHeight: height, ...carouselStyles.card }}>
      <CardActionArea
        component={Link}
        to={proj.abbr}
        state={{ background: location }}
      >
        <Box sx={{ ...width, ...carouselStyles.outerBox }}>
          <CardMedia>
            <PhotoLibraryTwoToneIcon sx={{ ...width, height }} />
          </CardMedia>
          <Box sx={{ ...carouselStyles.textOverlay }}>
            <Typography variant="caption">
              Photo unavailable at the moment.
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const PlaceholderCarousel = ({ proj, width, height }: ProjectCarouselProps) => {
  const placeholders = [1, 2];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Carousel
      stopAutoPlayOnHover={true}
      fullHeightHover={true}
      autoPlay={false}
      interval={5000}
      animation={"slide"}
      height={height}
      NextIcon={<KeyboardArrowRightTwoToneIcon />}
      PrevIcon={<KeyboardArrowLeftTwoToneIcon />}
      navButtonsAlwaysVisible={isMobile ? true : false}
    >
      {placeholders.map((item, i) => (
        <PlaceholderCard key={i} proj={proj} width={width} height={height} />
      ))}
    </Carousel>
  );
};

const CarouselCard = ({ proj, width, height }: ProjectCarouselProps) => {
  const location = useLocation();
  const images = proj.images;
  const cld = getCloudinaryInstance;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imgWidth = isMobile ? width.width.xs : width.width.md;
  return (
    <Carousel
      stopAutoPlayOnHover={true}
      fullHeightHover={true}
      autoPlay={false}
      interval={5000}
      animation={"slide"}
      height={height}
      NextIcon={<KeyboardArrowRightTwoToneIcon />}
      PrevIcon={<KeyboardArrowLeftTwoToneIcon />}
      navButtonsAlwaysVisible={isMobile ? true : false}
    >
      {images.map((item, i) => (
        <Card key={i} sx={{ minHeight: height, ...carouselStyles.card }}>
          <CardActionArea
            component={Link}
            to={proj.abbr}
            state={{ background: location }}
          >
            <Box sx={{ width: width, ...carouselStyles.outerBox }}>
              <CardMedia>
                <AdvancedImage
                  cldImg={cld
                    .image(`portfolio/${item.src}`)
                    .resize(fit(imgWidth, height))}
                  plugins={[placeholder({ mode: "blur" }), responsive()]}
                />
              </CardMedia>
              <Box sx={{ ...carouselStyles.textOverlay }}>
                <Typography variant="caption">{item.description}</Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Carousel>
  );
};

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { proj, width, height } = props;

  return proj.images.length == 0 ? (
    <PlaceholderCarousel proj={proj} width={width} height={height} />
  ) : (
    <CarouselCard proj={proj} width={width} height={height} />
  );
};

export default ProjectCarousel;
