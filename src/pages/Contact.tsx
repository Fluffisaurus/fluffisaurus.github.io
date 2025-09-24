import React, { useRef } from "react";
import loadable from "@loadable/component";

import {
  Card,
  CardActionArea,
  Grid,
  SvgIconProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import ScrollableContainer from "../components/styled/ScrollableContainer";
import SlideWrapper from "../components/styled/SlideWrapper";
import { ANI_CONST, ImageQualityProps } from "../components/styled/constants";
import FadeWrapper from "../components/styled/FadeWrapper";
import { toast } from "react-toastify";

const CloudinaryCustomImage = loadable(
  () => import("../components/CloudinaryCustomImage")
);

interface ContactInfo {
  name: string;
  link: string;
  icon: React.ReactElement<SvgIconProps>;
  modal?: boolean;
}

const info: ContactInfo[] = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/angus-hon/",
    icon: <LinkedInIcon />,
  },
  {
    name: "github",
    link: "https://github.com/Fluffisaurus",
    icon: <GitHubIcon />,
  },
  { name: "email", link: "", icon: <EmailIcon />, modal: true },
];

const Contact: React.FunctionComponent = ({
  imgQuality,
}: ImageQualityProps) => {
  const theme = useTheme();
  const animationBreakpoint = useMediaQuery(theme.breakpoints.down("laptop"));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("angushon96@gmail.com");
      toast.success("Copied email to clipboard.");
    } catch (err: unknown) {
      console.error(
        `Failed to copy email to clipboard: ${
          err instanceof Error && err.message
        }`
      );
      toast.error("Failed to copy email to clipboard");
    }
  };

  return (
    <>
      <ScrollableContainer ref={containerRef}>
        <FadeWrapper>
          <Typography variant="h3">Contact Info</Typography>
        </FadeWrapper>
        <Grid
          container
          spacing={2}
          direction={{ mobile: "column", tablet: "row" }}
        >
          {info.map((item, i) => {
            return (
              <SlideWrapper
                slideFromRef={containerRef}
                delay={i * ANI_CONST.CONTACT_BADGE_DELAY}
                direction={animationBreakpoint ? "up" : "left"}
              >
                <Card key={i} sx={{ width: "150px", height: "fit-content" }}>
                  <CardActionArea
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={item.modal ? () => handleEmailClick() : undefined}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
                      {item.icon}
                      <Typography variant="body1">{item.name}</Typography>
                    </Grid>
                  </CardActionArea>
                </Card>
              </SlideWrapper>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={1}
          direction={"column"}
          sx={{ paddingTop: "30px" }}
        >
          <SlideWrapper
            slideFromRef={containerRef}
            delay={ANI_CONST.CONTACT_PORTRAIT_HEADING_DELAY}
            direction="up"
          >
            <Typography variant="h5">Who you are contacting:</Typography>
          </SlideWrapper>
          <SlideWrapper
            slideFromRef={containerRef}
            delay={ANI_CONST.CONTACT_PORTRAIT_PIC_DELAY}
            direction="up"
          >
            <Card sx={{ width: "fit-content", height: "fit-content" }}>
              <Grid
                container
                direction={"column"}
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <CloudinaryCustomImage
                  src={"Elite_goose_jndy3l"}
                  width={400}
                  height={400}
                  imgQuality={imgQuality}
                />
                <Typography variant="body1">self portrait</Typography>
              </Grid>
            </Card>
          </SlideWrapper>
        </Grid>
      </ScrollableContainer>
    </>
  );
};

export default Contact;
