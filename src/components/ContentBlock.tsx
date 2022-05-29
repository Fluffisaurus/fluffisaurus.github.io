import React, { useEffect, useState } from "react";

import "../styles/content-block.scss";

export interface ContentBlockProps {
  heading: string;
  body: string[];
}

const ContentBlock = ({ heading, body }: ContentBlockProps) => {
  const [headingText, setHeadingText] = useState<string>("");
  const [bodyText, setBodyText] = useState<string[]>([""]);

  useEffect(() => {
    setHeadingText(heading);
    setBodyText(body);
  }, [body, heading]);

  return (
    <div className="Content-block">
      <h2>{headingText}</h2>
      {bodyText.map((body, i) => {
        return <p key={i}>{body}</p>;
      })}
    </div>
  );
};

export default ContentBlock;
