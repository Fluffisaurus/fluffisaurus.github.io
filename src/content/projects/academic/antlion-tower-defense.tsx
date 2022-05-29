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
      src: "atd/atd-pathfinding.png",
      alt: "ATD: A* Pathfinding",
      description: "Enemy AI with A* Pathfinding shown by lines and points.",
    },
    {
      src: "atd/atd-start-screen.png",
      alt: "ATD: Start Screen",
      description: "Start screen for the game.",
    },
    {
      src: "atd/atd-story.png",
      alt: "ATD: Story Screen",
      description: "Scrollable story and narrative screen.",
    },
    {
      src: "atd/atd-level-select.png",
      alt: "ATD: Level Select Screen",
      description: "Level select screen.",
    },
    {
      src: "atd/atd-gameplay.png",
      alt: "ATD: Gameplay Screenshot",
      description: "Gameplay screenshot.",
    },
    {
      src: "atd/atd-win-screen.png",
      alt: "ATD: Win Screen",
      description: "Win screen",
    },
    {
      src: "atd/atd-lose-screen.png",
      alt: "ATD: Lose Screen",
      description: "Lose screen",
    },
  ],
};

export default antlionTowerDefense;
