import { Project } from "../interfaces";

const websiteV3: Project = {
  abbr: "portfolio-v3",
  name: "Portfolio v3.0",
  date: "Sept 2025 - Present",
  tags: [
    "React",
    "SCSS",
    "TypeScript",
    "Custom MUI",
    "Webpack 5",
    "Cloudinary CDN",
    "SPA",
  ],
  category: "2025 Portfolio",
  link: {
    repo: "https://github.com/Fluffisaurus/fluffisaurus.github.io",
    host: "",
    hostCTA: "",
  },
  detail: {
    keypoints: [
      "Another rewrite succeeding Website V2 focused on cutting-edge tech for its time in 2022… finally finished in 2025.",
      "My goal was to deliver a user experience that’s intuitive and seamlessly smooth to showcase my execution of product and user-centered design.",
      "Hosted on AWS using S3, CloudFront, and Route53 at a frugal cost of 1 cent per month with infrastructure and resources managed via Terraform.",
      "Front-end adheres to my core principles of being a user-friendly, lightweight, fast, and maintainable project that uses TypeScript, Cloudinary CDN, fully customized MUI, and Webpack 5.",
    ],
    short: "",
    long: [],
  },
  images: [
    {
      src: "portfolio-v3/portfolio_3.0-desktop_less-is-more_hmv5wr",
      description:
        "PageSpeed Insights report from Apr 13, 2026 for desktop performance and opimization.",
    },
    {
      src: "portfolio-v3/portfolio_3..0-mobile_less-is-more_joqtda",
      description:
        "PageSpeed Insights report from Apr 13, 2026 for mobile . Assumes the user is using a budget phone (Moto G Power) on a slow and throttling 4G network.",
    },
  ],
};

export default websiteV3;
