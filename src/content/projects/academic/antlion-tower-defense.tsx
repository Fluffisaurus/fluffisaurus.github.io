import { Project } from "../interfaces";

const antlionTowerDefense: Project = {
  abbr: "antlion-td",
  name: "Antlion Tower Defense",
  date: "Oct 2018 - Dec 2018",
  tags: [
    "Unity",
    "C#",
    "Pathfinding",
    "ECS",
    "Game Dev",
    "Game Design",
    "Game",
  ],
  category: "Tower Defense Game",
  link: {
    repo: "https://github.com/Fluffisaurus/ATD",
    host: "",
  },
  detail: {
    short:
      "Build an army to fend off invaders with 5 different defensive towers. Block off paths and decide how you want to redirect the invading antlions.",
    long: [],
  },
  images: [
    {
      src: "atd/atd-pathfinding_muihab",
      alt: "ATD: A* Pathfinding",
      description: "Enemy AI with A* Pathfinding shown by lines and points.",
    },
    {
      src: "atd/atd-start-screen_mus0ji",
      alt: "ATD: Start Screen",
      description: "Start screen for the game.",
    },
    {
      src: "atd/atd-story_xms5lc",
      alt: "ATD: Story Screen",
      description: "Scrollable story and narrative screen.",
    },
    {
      src: "atd/atd-start-screen_mus0ji",
      alt: "ATD: Level Select Screen",
      description: "Level select screen.",
    },
    {
      src: "atd/atd-gameplay_xaxpcl",
      alt: "ATD: Gameplay Screenshot",
      description: "Gameplay screenshot.",
    },
    {
      src: "atd/atd-win-screen_vwnbfe",
      alt: "ATD: Win Screen",
      description: "Win screen",
    },
    {
      src: "atd/atd-lose-screen_tebbl0",
      alt: "ATD: Lose Screen",
      description: "Lose screen",
    },
  ],
};

export default antlionTowerDefense;
