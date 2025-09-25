import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { To, useNavigate } from "react-router-dom";
import { CardContent, Grid } from "@mui/material";

import { Project } from "../../content/projects/interfaces";
import computeNodeStyle from "../../utils/computeNodeStyle";
import ScrollableContainer from "../styled/ScrollableContainer";
import FadeWrapper from "../styled/FadeWrapper";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
import CarouselWrapper from "../styled/CarouselWrapper";
import CarouselPlaceholderCard from "../styled/CarouselPlaceholder";
import CarouselMedia from "../styled/CarouselMedia";
import { isSmallScreen } from "../../utils/breakpoints";

const styles = {
  modalBox: {
    position: "absolute",
    top: `calc(50% + ${ANI_CONST.GLOBAL_NAV_HEIGHT / 2}px)`, // global nav bar offset
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "87%",
    height: "87%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    display: "flex",
  },
};

interface ProjectModalCardProps extends ImageQualityProps {
  proj: Project;
}

export default function ProjectModalCard({
  proj,
  imgQuality,
}: ProjectModalCardProps) {
  const navigate = useNavigate();
  const smallScreen = isSmallScreen();

  const [dims, setDims] = useState({ width: 0, height: 0 });

  // issue with useRefs and useEffect detailed in this article
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
  // solution from: https://stackoverflow.com/a/67906087
  const modalRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const nodeDims = computeNodeStyle(node);
      setDims({
        width: nodeDims.width,
        height: nodeDims.height - ANI_CONST.GLOBAL_NAV_HEIGHT,
      });
    }
  }, []);

  const handleClose = () => {
    navigate("-1" as To, { replace: true });
  };

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby={`modal-modal-title-${proj.abbr}`}
      aria-describedby={`modal-modal-description-${proj.abbr}`}
    >
      <FadeWrapper>
        <Box
          sx={{
            ...styles.modalBox,
            flexDirection: smallScreen ? "column-reverse" : "row",
          }}
        >
          <ScrollableContainer
            sx={{
              flexDirection: "column",
              width: smallScreen ? "100%" : "30%",
              height: smallScreen ? "40%" : "100%",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
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
          </ScrollableContainer>
          <Box
            ref={modalRef}
            sx={{ width: smallScreen ? "100%" : "70%", height: "100%" }}
          >
            <CarouselWrapper navButtonsAlwaysVisible={true}>
              {proj.images.length >= 1
                ? proj.images.map((item, i) => (
                    <CarouselMedia
                      key={i}
                      item={item}
                      width={dims.width}
                      height={dims.height}
                      cardActionArea={false}
                      imgQuality={imgQuality}
                    />
                  ))
                : [1, 2].map((i) => (
                    <CarouselPlaceholderCard
                      key={i}
                      width={dims.width}
                      height={dims.height}
                      cardActionArea={false}
                    />
                  ))}
            </CarouselWrapper>
          </Box>
        </Box>
      </FadeWrapper>
    </Modal>
  );
}
