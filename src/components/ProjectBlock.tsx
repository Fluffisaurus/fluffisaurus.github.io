import React from "react";

import { Project } from "../content/projects/interfaces";

import "../styles/project-block.scss";

interface ProjectBlockProps {
  proj: Project;
}

const ProjectBlock = ({ proj }: ProjectBlockProps) => {
  return (
    <div className="Project-block">
      <h2>{proj.name}</h2>
      <h3>{proj.category}</h3>
      <div className="Project-block__tags">
        {proj.tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
      <p>{proj.date}</p>
      <div className="Project-block__content">
        <p>{proj.detail.short}</p>
      </div>
    </div>
  );
};

export default ProjectBlock;
