import React, { useEffect, useState } from "react";

import AboutMeContent from "../content/about-me";
import ContentBlock, { ContentBlockProps } from "../components/ContentBlock";

const AboutMe: React.FunctionComponent = () => {
  const [contentData, setContentData] = useState<Array<ContentBlockProps>>();

  useEffect(() => {
    setContentData(AboutMeContent);
  });

  return (
    <>
      <section>
        <h1>5w1h</h1>
        {contentData?.map((cntBlk, i) => {
          return (
            <ContentBlock key={i} heading={cntBlk.heading} body={cntBlk.body} />
          );
        })}
      </section>
    </>
  );
};

export default AboutMe;
