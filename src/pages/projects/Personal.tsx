import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";

const Personal = () => {
  return (
    <>
      <h1>Personal_projects</h1>
      {ProjectList[ProjectCategories.PERSONAL].map((proj, i) => {
        return <ProjectBlock proj={proj} key={i} />;
      })}
    </>
  );
};

export default Personal;
