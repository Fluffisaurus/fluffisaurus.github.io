import { Project } from "../interfaces";

const dotfiles: Project = {
  abbr: "dotfiles",
  name: "My dotfiles",
  date: "Aug 2025 - Present",
  tags: ["dotfiles", "Linux", "Fedora", "dotbot", "fish shell", "config files"],
  category: "Automated Linux config files",
  link: {
    repo: "https://github.com/Fluffisaurus/dotfiles",
    host: "",
    hostCTA: "",
  },
  detail: {
    keypoints: [
      "Github repo to expedite my setup process on new linux distributions by managing and installing config files.",
      "Managed by dotbot and automatically installs config files for fish, AWS, and a custom script for my Zenbook Duo.",
      "Came about as a means to quell the annoyance of having to re-setup my custom fish terminal everytime I try a new linux distro.",
    ],
    short: "",
    long: [],
  },
  images: [
    {
      src: "dotfiles/dotfiles-repo-content_n9uu39",
      description: "Contents of my dotfiles repo as of Mar 12, 2026.",
    },
    {
      src: "dotfiles/fedora-43-kde-setup_gok2hl",
      description: "My custom Fedora 43 KDE desktop setup.",
    },
    {
      src: "dotfiles/custom-kitty-starship-fish-setup_gqzo0d",
      description:
        "Screenshot of my kitty terminal with a custom starship prompt config and fish shell.",
    },
  ],
};

export default dotfiles;
