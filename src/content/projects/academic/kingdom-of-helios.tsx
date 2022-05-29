import { Project } from "../interfaces";

const kingdomOfHelios: Project = {
  abbr: "kingdom-of-helios",
  name: "Kingdom of Helios",
  date: "Oct 2018 - Dec 2018",
  tags: ["Unity", "C#", "Game Dev", "Game Design", "Game"],
  category: "2D Side-Scrolling Platformer Game",
  link: {
    repo: "https://github.com/Fluffisaurus/kingdom-of-helios",
    host: "bit.ly/KoHelios",
  },
  detail: {
    short:
      "2D side-scrolling platformer RPG - play as two protagonists with distinct skill sets to progress through the game.",
    long: [],
  },
  images: [
    {
      src: "helios/main-screen.png",
      alt: "Helios: Main Screen",
      description: "Start screen.",
    },
    {
      src: "helios/char-x.PNG",
      alt: "Helios: Protagonist",
      description: "Main protagonist with distinct skill set.",
    },
    {
      src: "helios/char-y.PNG",
      alt: "Helios: Protagonist's younger brother",
      description: "Protagonist's younger brother with a different skill set.",
    },
    {
      src: "helios/scene-flow-chart.png",
      alt: "Helios: Scene Flow Chart",
      description: "Game's main scene flow chart.",
    },
    {
      src: "helios/story-map.png",
      alt: "Helios: Story map of the game",
      description: "Game's story map and progression.",
    },
  ],
};

export default kingdomOfHelios;
