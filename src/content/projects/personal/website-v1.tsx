import { Project } from "../interfaces";

const websiteV1: Project = {
  abbr: "website",
  name: "Personal Website",
  date: "Mar 2019 - Feb 2020",
  tags: ["React", "JS", "CSS"],
  category: "Single-Page Web Application",
  link: {
    repo: "",
    host: "",
  },
  detail: {
    keypoints: [
      "1st attempt at creating a full SPA from scratch with React and CSS",
      "Ultra lightweight app utilizing CDN for content delivery",
      "Self-taught React with class-based reusable components",
      "First online portfolio that utilizes more than plain HTML & CSS",
      "Early adopter of Light/Dark Mode before it was a standard",
    ],
    short:
      "You're looking right at it! Single page web app - my online portfolio. Find my most up-to-date projects, interests, and my contact info.",
    long: [],
  },
  images: [
    {
      src: "website/mobile_w4jkn3",
      alt: "Website: Mobile View",
      description: "Mobile view of my website",
    },
    {
      src: "website/mobile-about_tkthtq",
      alt: "Website: Mobile - About Page",
      description: "Different hierarchy and layout for mobile view.",
    },
    {
      src: "website/mobile-projects_aalnaf",
      alt: "Website: Mobile - Projects Page",
      description: "Vertical card layout and swipable carousel to view images.",
    },
    {
      src: "website/mobile-light_toonsi",
      alt: "Website: Mobile - Light Theme",
      description: "Light themed version.",
    },
    {
      src: "website/mobile-light-about_unfudo",
      alt: "Website: Mobile - Light Theme About Page",
      description: "Brighter colour palette for outdoor environments.",
    },
    {
      src: "website/mobile-light-projects_cloblh",
      alt: "Website: Mobile - Light Theme Projects Page",
      description: "Light themed version of the projects page.",
    },
  ],
};

export default websiteV1;
