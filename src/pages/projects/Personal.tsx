import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import PersonalProjects from "../../content/projects/personal-list";

const Personal = () => {
  return (
    <>
      <h1>Personal_projects</h1>
      {PersonalProjects.map((proj, i) => {
        return <ProjectBlock proj={proj} key={i} />;
      })}
    </>
  );
};

export default Personal;
