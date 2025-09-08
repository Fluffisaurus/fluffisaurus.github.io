import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { AdvancedImage } from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import getCloudinaryInstance from "./Cloudinary";
import { carouselStyles } from "./ProjectCarousel";
import { Project } from "../content/projects/interfaces";

const styles = {
  ...carouselStyles,
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `90%`,
    height: `80%`,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
  },
};

interface ProjectModalCarouselProps {
  proj: Project;
}

export default function ProjectModalCarousel({
  proj,
}: ProjectModalCarouselProps) {
  const navigate = useNavigate();
  const cld = getCloudinaryInstance;

  const [dims, setDims] = useState({ width: 0, height: 0 });

  // issue with useRefs and useEffect detailed in this article
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
  // solution from: https://stackoverflow.com/a/67906087
  const modalRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const cmpStyle = getComputedStyle(node);
      const margin = {
        width: parseInt(cmpStyle.marginLeft) + parseInt(cmpStyle.marginRight),
        height: parseInt(cmpStyle.marginTop) + parseInt(cmpStyle.marginBottom),
      };
      const padding = {
        width: parseInt(cmpStyle.paddingLeft) + parseInt(cmpStyle.paddingRight),
        height:
          parseInt(cmpStyle.paddingTop) + parseInt(cmpStyle.paddingBottom),
      };

      setDims({
        width: node.offsetWidth - margin.width - padding.width,
        height: node.offsetHeight - margin.height - padding.height,
      });
    }
  }, []);

  const handleClose = () => {
    navigate(-1 as any, { replace: true });
  };

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby={`modal-modal-title-${proj.abbr}`}
      aria-describedby={`modal-modal-description-${proj.abbr}`}
    >
      <Box sx={styles.modalBox}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box />
            <Typography
              id={`modal-modal-title-${proj.abbr}`}
              component="div"
              variant="h5"
            >
              {proj.name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {proj.category}
            </Typography>
            <Grid
              container
              display="flex"
              flexDirection="row"
              spacing={2}
              rowSpacing={0}
              width="90%"
            >
              {proj.tags.map((tag, i) => (
                <Typography
                  key={i}
                  variant="subtitle2"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  {tag}
                </Typography>
              ))}
            </Grid>
            <Box sx={{ paddingTop: `10px` }}>
              <Typography variant="body2">{proj.date}</Typography>
              <Typography variant="body1">{proj.detail.short}</Typography>
            </Box>
          </CardContent>
        </Box>
        <Box ref={modalRef} sx={{ width: `70%` }}>
          <Carousel
            stopAutoPlayOnHover
            fullHeightHover
            autoPlay={false}
            interval={5000}
            animation="slide"
            indicators
            navButtonsAlwaysVisible
            NextIcon={<KeyboardArrowRightTwoToneIcon />}
            PrevIcon={<KeyboardArrowLeftTwoToneIcon />}
          >
            {proj.images.map((item, i) => (
              <Card
                key={i}
                sx={{ height: dims.height, ...carouselStyles.card }}
              >
                <Box sx={{ width: dims.width, ...carouselStyles.outerBox }}>
                  <AdvancedImage
                    cldImg={cld
                      .image(`portfolio/${item.src}`)
                      .resize(fit(dims.width, dims.height))}
                  />
                  <Box sx={{ ...carouselStyles.textOverlay }}>
                    <Typography variant="caption">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Modal>
  );
}
