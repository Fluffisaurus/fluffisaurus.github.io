import { Project } from "../interfaces";

const zenbookDuo: Project = {
  abbr: "zenbook-duo-linux",
  name: "Zenbook Duo Fedora KDE",
  date: "Aug 2025",
  tags: [
    "shell scripts",
    "service",
    "Linux",
    "Fedora 42",
    "KDE",
    "ASUS Zenbook Duo UX8406CA",
  ],
  category: "Linux scripts for dual screen features",
  link: {
    repo: "https://github.com/Fluffisaurus/zenbook-duo-fedora-kde",
    host: "",
    hostCTA: "",
  },
  detail: {
    keypoints: [
      "Forked and rewrote a Github Repo that enables support in Fedora 42 of all the cutting-edge technology that would otherwise only work in Windows through ASUS’s proprietary software.",
      "Shell script that enables features like dual-screen functionality, gyro detection for changing orientation, keyboard detachment/attachment, and syncing screen brightness.",
      "I wanted my laptop and all its fancy features to work on Linux where I do most of my development work and experiment with new ideas.",
    ],
    short: "",
    long: [],
  },
  images: [
    {
      src: "zenbook-duo-service-setup_crywl6",
      description:
        "Screenshot of zenbook-duo-service background service successfully running.",
    },
  ],
};

export default zenbookDuo;
