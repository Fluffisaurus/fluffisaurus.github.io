import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActions, Collapse, Grid } from "@mui/material";

import { Project } from "../content/projects/interfaces";
import ProjectCarousel from "./ProjectCarousel";
import { ANI_CONST, ImageQualityProps } from "./styled/constants";
import { useLocation } from "react-router-dom";

interface ProjectBlockProps extends ImageQualityProps {
  proj: Project;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props; //eslint-disable-line @typescript-eslint/no-unused-vars
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
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
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const ProjectBlock = ({ proj, imgQuality }: ProjectBlockProps) => {
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
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ ...cardDims }}>
      <CardMedia sx={{ minHeight: 200 }}>
        <ProjectCarousel
          key={location.pathname}
          proj={proj}
          width={{ width: cardDims.width }}
          height={400}
          imgQuality={imgQuality}
        />
      </CardMedia>
      <CardContent sx={{ position: "relative" }}>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">{proj.date}</Typography>
          <Typography variant="body1">{proj.detail.short}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectBlock;
