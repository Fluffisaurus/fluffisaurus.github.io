import React from "react";

import AboutMeContent from "../content/about-me";
import ContentBlock from "../components/ContentBlock";

const AboutMe: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <h1>5w1h</h1>
        {AboutMeContent?.map((cntBlk, i) => {
          return (
            <ContentBlock key={i} heading={cntBlk.heading} body={cntBlk.body} />
          );
        })}
      </section>
    </>
  );
};

export default AboutMe;
