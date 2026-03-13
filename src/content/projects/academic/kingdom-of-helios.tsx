import { Project } from "../interfaces";

const kingdomOfHelios: Project = {
  abbr: "kingdom-of-helios",
  name: "Kingdom of Helios",
  date: "Oct 2018 - Dec 2018",
  tags: ["Unity", "C#", "Game Dev", "Game Design", "Game"],
  category: "2D Side-Scrolling Platformer Game",
  link: {
    repo: "https://github.com/Fluffisaurus/kingdom-of-helios",
    host: "https://angushon.io/kingdom-of-helios/",
    hostCTA: "Play it here",
  },
  detail: {
    keypoints: [
      "2D platformer that draws inspiration from MapleStory.",
      "Tag-team mechanic where player can swap characters to utilize different skillsets to conquer different enemies and terrain challenges.",
      "Implemented all game logic and RPG game mechanics.",
      "Controls: WASD to move, Q to swap characters, 1-4 for skills, Cursor to aim, RMB to melee.",
    ],
    short:
      "2D side-scrolling platformer RPG - play as two protagonists with distinct skill sets to progress through the game.",
    long: [],
  },
  images: [
    {
      src: "helios/main-screen_eutlnh",
      description: "Start screen.",
    },
    {
      src: "helios/char-x_v28nxl",
      description: "Main protagonist with distinct skill set.",
    },
    {
      src: "helios/char-y_atx5aa",
      description: "Protagonist's younger brother with a different skill set.",
    },
    {
      src: "helios/scene-flow-chart_vfmnj1",
      description: "Game's main scene flow chart.",
    },
    {
      src: "helios/story-map_djrgbx",
      description: "Game's story map and progression.",
    },
  ],
};

export default kingdomOfHelios;
