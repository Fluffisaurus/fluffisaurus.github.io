import { Project } from "../interfaces";

const websiteV2: Project = {
  abbr: "portfolio-v2",
  name: "Portfolio v2.0",
  date: "Jun 2022",
  tags: ["React", "JS", "CSS", "SPA", "Cloudinary CDN"],
  category: "2022 Portfolio",
  link: {
    repo: "",
    host: "https://angushon.io/portfolio-v2/",
    hostCTA: "See it here",
  },
  detail: {
    keypoints: [
      "Complete rewrite of my original website with a focus on being ultra lightweight and content delivery.",
      "Re-learned React after its major shift to using hooks instead of class-based components.",
      "Ultra lightweight app utilizing CDN for content delivery.",
      "Perfect score of 100 in all categories in PageSpeed Insights back in 2022.",
    ],
    short: "",
    long: [],
  },
  images: [
    {
      src: "portfolio-v2/landing-page_chwhof",
      description:
        "Simplified landing page for the first revision of my original portfolio.",
    },
    {
      src: "portfolio-v2/example-project_x2muib",
      description:
        "Redesigned project page includes a picture carousel, tags, short description, and hyperlinks in a compact card format.",
    },
    {
      src: "portfolio-v2/contact-page_rcn8it",
      description:
        "Redesigned contact page includes links to important social platforms.",
    },
  ],
};

export default websiteV2;
