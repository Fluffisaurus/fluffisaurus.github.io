import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { AdvancedImage } from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";

import { Project } from "../content/projects/interfaces";
import cld from "./Cloudinary";
import { Link } from "react-router-dom";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

interface ProjectCarouselProps {
  proj: Project;
  width: number;
  height: number;
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 5px 0 5px",
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
  return (
    <Card sx={{ minHeight: height, ...styles.card }}>
      <CardActionArea component={Link} to={proj.abbr}>
        <Box sx={{ width: width, ...styles.outerBox }}>
          <CardMedia>
            <PhotoLibraryTwoToneIcon sx={{ width, height }} />
          </CardMedia>
          <Box sx={{ ...styles.textOverlay }}>
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
    >
      {placeholders.map((item, i) => (
        <PlaceholderCard key={i} proj={proj} width={width} height={height} />
      ))}
    </Carousel>
  );
};

const CarouselCard = ({ proj, width, height }: ProjectCarouselProps) => {
  const images = proj.images;
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
    >
      {images.map((item, i) => (
        <Card key={i} sx={{ minHeight: height, ...styles.card }}>
          <CardActionArea component={Link} to={proj.abbr}>
            <Box sx={{ width: width, ...styles.outerBox }}>
              <CardMedia>
                <AdvancedImage
                  cldImg={cld
                    .image(`portfolio/${item.src}`)
                    .resize(fit(width, height))}
                />
              </CardMedia>
              <Box sx={{ ...styles.textOverlay }}>
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
  const { proj, width, height, ...other } = props;

  return proj.images.length == 0 ? (
    <PlaceholderCarousel proj={proj} width={width} height={height} />
  ) : (
    <CarouselCard proj={proj} width={width} height={height} />
  );
};

export default ProjectCarousel;
