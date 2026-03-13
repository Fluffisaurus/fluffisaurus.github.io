import { Project } from "../interfaces";

const websiteV1: Project = {
  abbr: "portfolio-v1",
  name: "Portfolio v1.0",
  date: "Mar 2019 - Feb 2020",
  tags: ["React", "JS", "CSS", "SPA"],
  category: "2019 Portfolio",
  link: {
    repo: "",
    host: "https://angushon.io/portfolio-v1/",
    hostCTA: "See it here",
  },
  detail: {
    keypoints: [
      "Curiosity and self-indulgence led me to create my first ever online portfolio to showcase everything I worked on in my free time and in university.",
      "Full SPA with React and CSS back in the era where class-based components were the norm and React hooks didn’t exist.",
      "Self-taught React and Javascript to build this project.",
      "Early adopter of Light/Dark Mode before it was a standard.",
    ],
    short:
      "You're looking right at it! Single page web app - my online portfolio. Find my most up-to-date projects, interests, and my contact info.",
    long: [],
  },
  images: [
    {
      src: "website/mobile_w4jkn3",
      description: "Mobile view of my website",
    },
    {
      src: "website/mobile-about_tkthtq",
      description: "Different hierarchy and layout for mobile view.",
    },
    {
      src: "website/mobile-projects_aalnaf",
      description: "Vertical card layout and swipable carousel to view images.",
    },
    {
      src: "website/mobile-light_toonsi",
      description: "Light themed version.",
    },
    {
      src: "website/mobile-light-about_unfudo",
      description: "Brighter colour palette for outdoor environments.",
    },
    {
      src: "website/mobile-light-projects_cloblh",
      description: "Light themed version of the projects page.",
    },
  ],
};

export default websiteV1;
