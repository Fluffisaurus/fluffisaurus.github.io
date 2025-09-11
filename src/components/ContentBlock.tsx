import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

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
    <>
      <Grid size={{ xs: 15, md: 20 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              {headingText}
            </Typography>
            <Typography variant="body1">
              {bodyText.map((body, i) => {
                return <Typography key={i}>{body}</Typography>;
              })}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ContentBlock;
