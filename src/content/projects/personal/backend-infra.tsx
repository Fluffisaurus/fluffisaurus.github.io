import { Project } from "../interfaces";

const personalBackendInfra: Project = {
  abbr: "backend-infra",
  name: "My Backend Infrastructure",
  date: "Oct 2025 - Present",
  tags: ["Terraform", "IaC", "AWS", "AWS S3", "AWS CloudFront", "AWS Route53"],
  category: "Portable Provider-Agnostic Backend",
  link: {
    repo: "",
    host: "",
    hostCTA: "",
  },
  detail: {
    keypoints: [
      "My setup for hosting personal content, managing domains, spinning up prototypes and/or proof of concepts, and for all other random ideas.",
      "Everything here and all my other content is provisioned, managed, and automated with this infra setup.",
      "Used Terraform as Infrastructure as Code (IaC) for portability and to be provider agnostic, with the current set up utilizing AWS.",
      "I’m able to quickly spin up the backend required for any website or tool under a custom subdomain in a few minutes.",
    ],
    short: "",
    long: [],
  },
  images: [],
};

export default personalBackendInfra;
