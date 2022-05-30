import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import AcademicProjects from "../../content/projects/academic-list";

const Academic = () => {
  return (
    <>
      <h1>Academic_projects</h1>
      {AcademicProjects.map((proj, i) => {
        return <ProjectBlock proj={proj} key={i} />;
      })}
    </>
  );
};

export default Academic;
