import { Project } from "../interfaces";

const ggj2020: Project = {
  abbr: "global-game-jam-2020",
  name: "Global Game Jam 2020",
  date: "Jan 2020 - Feb 2020",
  tags: ["GGJ-2020", "Unity", "C#", "Strategy", "Game"],
  category: "2D Strategy Game",
  link: {
    repo: "https://github.com/Fluffisaurus/GGJ-2020",
    host: "http://bit.ly/RatThief",
    hostCTA: "Play it here",
  },
  detail: {
    keypoints: [
      "Grid-based thinking game based on the GGJ 2020 theme of 'Repair'.",
      "Emergent gameplay where players discover mechanics during their playthrough.",
    ],
    short:
      "Our team's take on the Global Game Jam 2020 theme: Repair. A strategy game with unique and emergent mechanics.",
    long: [],
  },
  images: [
    {
      src: "ggj/title-screen_v9zvyj",
      alt: "GGJ-2020 I Was Never Here: Title Screen",
      description: "Game's title screen.",
    },
    {
      src: "ggj/the-squad_fesuum",
      alt: "GGJ-2020 I Was Never Here: Team Photo",
      description:
        "The Squad! From left to right: Angus Hon, Ahmed Abuzuraiq, Anson Christo, Jordan Watterson, Lily Zarif",
    },
  ],
};
export default ggj2020;
