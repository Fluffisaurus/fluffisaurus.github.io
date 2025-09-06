import { Project } from "../interfaces";

const fallingBlocks: Project = {
  // falling-blocks
  abbr: "falling-blocks",
  name: "Falling Blocks",
  date: "Apr 2018 - May 2018",
  tags: ["C#", "Unity", "Game Dev", "Game"],
  category: "Endless Game",
  link: {
    repo: "https://github.com/Fluffisaurus/Falling-Blocks",
    host: "bit.ly/fall-blocks",
  },
  detail: {
    short:
      "Endless 2D game - evade the blocks! Was completed to practice Unity basics after a long hiatus from the game engine.",
    long: [],
  },
  images: [
    {
      src: "fallingblocks/home_g0izls",
      alt: "Falling Blocks: Home Screen",
      description: "Instructional home screen.",
    },
    {
      src: "fallingblocks/in-game_d4a9hc",
      alt: "Falling Blocks: In-Game",
      description: "In game screenshot.",
    },
    {
      src: "fallingblocks/game-over_skfeve",
      alt: "Falling Blocks: Game Over Screen",
      description: "Game over screen with highscore and play-again prompt.",
    },
  ],
};

export default fallingBlocks;
