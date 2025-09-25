import React, { useLayoutEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled, useTheme } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActions, Grid, Slide } from "@mui/material";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import { Project } from "../../content/projects/interfaces";
import ProjectCardMedia from "./ProjectCardMedia";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
import { Link, useLocation } from "react-router-dom";
import resolveDimensionValue from "../../utils/breakpoints";

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

const ProjectCardTitle = (proj: Project) => {
  return (
    <>
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
      <Grid
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
    </>
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
            right: "10px",
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
          <Grid container rowSpacing={3}>
            <div>
              <ProjectCardTitle {...proj} />
            </div>
            <div>
              <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                {proj.date}
              </Typography>
              <Typography variant="body1">{proj.detail.short}</Typography>
            </div>
          </Grid>
          <Button
            variant="cardDetails"
            component={Link}
            to={proj.abbr}
            state={{ background: location }}
          >
            More details
          </Button>
        </CardContent>
      </Slide>
    </Card>
  );
};

export default ProjectCard;
