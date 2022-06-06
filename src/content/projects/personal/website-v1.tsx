import { Project } from "../interfaces";

const websiteV1: Project = {
  abbr: "website",
  name: "Personal Website",
  date: "Mar 2019 - Present",
  tags: ["React", "JS", "CSS"],
  category: "Single-Page Web Application",
  link: {
    repo: "",
    host: "",
  },
  detail: {
    short:
      "You're looking right at it! Single page web app - my online portfolio. Find my most up-to-date projects, interests, and my contact info.",
    long: [],
  },
  images: [
    {
      src: "website/mobile_w4jkn3.jpg",
      alt: "Website: Mobile View",
      description: "Mobile view of my website",
    },
    {
      src: "website/mobile-about_tkthtq.jpg",
      alt: "Website: Mobile - About Page",
      description: "Different hierarchy and layout for mobile view.",
    },
    {
      src: "website/mobile-projects_aalnaf.jpg",
      alt: "Website: Mobile - Projects Page",
      description: "Vertical card layout and swipable carousel to view images.",
    },
    {
      src: "website/mobile-light_toonsi.jpg",
      alt: "Website: Mobile - Light Theme",
      description: "Light themed version.",
    },
    {
      src: "website/mobile-light-about_unfudo.jpg",
      alt: "Website: Mobile - Light Theme About Page",
      description: "Brighter colour palette for outdoor environments.",
    },
    {
      src: "website/mobile-light-projects_cloblh.jpg",
      alt: "Website: Mobile - Light Theme Projects Page",
      description: "Light themed version of the projects page.",
    },
  ],
};

export default websiteV1;
