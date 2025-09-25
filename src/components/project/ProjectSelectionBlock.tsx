import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";

import { Project } from "../../content/projects/interfaces";
import { ProjectCategories } from "../../content/projects/project-list";

interface ProjectSelectionBlockProps {
  cat: string;
  data: Project[];
}

const iconStyling = {
  display: "flex",
  width: "50%",
  height: "50%",
  margin: "auto",
};

const ProjectSelectionBlock = ({ cat, data }: ProjectSelectionBlockProps) => {
  const location = useLocation();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea component={Link} to={cat} state={location}>
        {cat == ProjectCategories.PERSONAL ? (
          <FaceTwoToneIcon sx={iconStyling} />
        ) : (
          <SchoolTwoToneIcon sx={iconStyling} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.map((proj) => {
              return `- ${proj.name} `;
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectSelectionBlock;
