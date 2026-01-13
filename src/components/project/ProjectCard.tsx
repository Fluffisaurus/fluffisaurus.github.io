import React, { useLayoutEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled, useTheme } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";

import { Project } from "../../content/projects/interfaces";
import ProjectCardMedia from "./ProjectCardMedia";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
import { useLocation } from "react-router-dom";
import resolveDimensionValue from "../../utils/breakpoints";
import Box from "@mui/material/Box";

interface ProjectCardProps extends ImageQualityProps {
  proj: Project;
  activeProj: string | null;
  setActiveProj: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props; //eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <IconButton {...other}>
      <AddCircleOutlineTwoToneIcon fontSize="medium" />
    </IconButton>
  );
})(({ theme }) => ({
  zIndex: ANI_CONST.ZINDEX.EXPAND_MORE,
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(225deg)",
      },
    },
  ],
}));

const ProjectCardLinks = (proj: Project) => {
  const hostLink = proj.link.host != "";
  const repoLink = proj.link.repo != "";
  return (
    <>
      {(hostLink || repoLink) && (
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          spacing={1}
          sx={{ paddingTop: "8px", alignItems: "center" }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            Links:
          </Typography>
          {repoLink && (
            <Button href={proj.link.repo} target="_blank">
              Github Repo
            </Button>
          )}
          {hostLink && (
            <Button href={proj.link.host} target="_blank">
              {proj.link.hostCTA}
            </Button>
          )}
        </Grid>
      )}
    </>
  );
};

const ProjectCardTitle = (proj: Project) => {
  return (
    <Grid container flexDirection={"column"}>
      <Typography component="div" variant="h5">
        {proj.name}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ color: "text.secondary" }}
      >
        {proj.category}
      </Typography>
    </Grid>
  );
};

const ProjectCard = ({
  proj,
  imgQuality,
  activeProj,
  setActiveProj,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = React.useState(false);
  /*
   * location as a key here helps react recognize which is parent vs child
   * when path updates, the state of the parent is preserved since React can keep track
   * of which is the parent via it's location.pathname.
   * in this case, fullscreen modal carousel is the child, forcing project block to
   * rerender or preserve its state
   *
   * search: "react rerender with key location" or "react rerender parent with child key location"
   */
  const location = useLocation();

  const cardDims = {
    width: ANI_CONST.PROJ_CARD_WIDTH,
    height: "fit-content",
  };

  const carouselDims = {
    // square sized carousel
    width: resolveDimensionValue(cardDims.width),
    height: resolveDimensionValue(cardDims.width),
  };

  const theme = useTheme();
  const collapsedContentStyling = {
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.vars.palette.background.paper,
    width: ANI_CONST.PROJ_CARD_WIDTH,
    height: "100%",
    zIndex: ANI_CONST.ZINDEX.COLLAPSED_CONTENT,
    overflow: "auto",
    scrollbarWidth: "thin",
  };

  useLayoutEffect(() => {
    if (activeProj != proj.abbr && expanded != false) {
      setExpanded(false);
    }
  }, [activeProj]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setActiveProj(proj.abbr);
  };

  return (
    <Card sx={{ ...cardDims, position: "relative" }}>
      <CardMedia sx={{ minHeight: 200 }}>
        <ProjectCardMedia
          key={location.pathname}
          proj={proj}
          imgQuality={imgQuality}
          {...carouselDims}
        />
      </CardMedia>
      <CardContent sx={{ position: "relative" }}>
        <ProjectCardTitle {...proj} />
        <CardActions
          disableSpacing
          sx={{
            position: "absolute",
            padding: 0,
            right: "13px",
            bottom: "10px",
          }}
        >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </CardContent>
      <Slide in={expanded} direction="up" timeout={ANI_CONST.PROJ_CARDS_DELAY}>
        <CardContent sx={{ ...collapsedContentStyling }}>
          <Grid
            container
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: theme.vars.palette.background.paper,
            }}
          >
            <ProjectCardTitle {...proj} />
          </Grid>
          <Box sx={{ height: "100%", padding: "10px 0px 25px 0px" }}>
            <Grid container rowSpacing={1}>
              <Grid // tags
                container
                display={"flex"}
                flexDirection={"row"}
                spacing={2}
                rowSpacing={0}
                width={"90%"}
              >
                {proj.tags.map((tag, i) => {
                  return (
                    <Typography
                      key={i}
                      variant="subtitle2"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      {tag}
                    </Typography>
                  );
                })}
              </Grid>
              <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                {proj.date}
              </Typography>
            </Grid>
            <Box>
              {proj.detail.keypoints.map((keypoint, i) => {
                return (
                  <Typography variant="body1" key={`${proj.abbr}-${i}`}>
                    - {keypoint}
                  </Typography>
                );
              })}
              <ProjectCardLinks {...proj} />
            </Box>
          </Box>
        </CardContent>
      </Slide>
    </Card>
  );
};

export default ProjectCard;
