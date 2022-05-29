import { Project } from "../interfaces";

const bobbysBreakout: Project = {
  abbr: "bobbys-breakout",
  name: "Bobby's Breakout",
  date: "Sep 2019 - Dec 2019",
  tags: [
    "Agile",
    "Game Dev",
    "NodeJS",
    "Full Stack",
    "Heroku",
    "OOD",
    "Sys Design",
    "Game",
  ],
  category: "Top Down RPG",
  link: {
    repo: "https://github.com/abhatthal/Bobby-Breakout",
    host: "bit.ly/bobby-breakout",
  },
  detail: {
    short:
      "Full stack browser RPG - play as SFU's Dr. Bobby Chan in a top-down game with the Pokemon-style combat system.",
    long: [],
  },
  images: [
    {
      src: "bobby/bobby-breakout-map.png",
      alt: "Bobby Breakout: Map",
      description: "In-game screenshot of the map - SFU's CS lab blueprint.",
    },
    {
      src: "bobby/bobby-breakout-inventory.png",
      alt: "Bobby Breakout: Inventory",
      description:
        "Player (Bobby's) inventory of picked up loot - user can swap loadouts and equipped items.",
    },
    {
      src: "bobby/bobby-breakout-fight.png",
      alt: "Bobby Breakout: Fight Scene",
      description: "Pokemon style fight scene!",
    },
    {
      src: "bobby/bobby-breakout-fight-1.png",
      alt: "Bobby Breakout: Fight Scene Player Ability",
      description: "Player using an ability - pokemon style combat dialogue.",
    },
    {
      src: "bobby/bobby-breakout-fight-2.png",
      alt: "Bobby Breakout: Fight Scene Enemy Ability",
      description: "Enemy retaliating with their custom skills.",
    },
    {
      src: "bobby/bobby-breakout-item.png",
      alt: "Bobby Breakout: Funny Items",
      description: "In-game items user can pick up.",
    },
    {
      src: "bobby/bobby-breakout-achievement.png",
      alt: "Bobby Breakout: Achievement",
      description:
        "Dynamic and persistent achievements screen (stored in database by account session).",
    },
    {
      src: "bobby/bobby-breakout-login.png",
      alt: "Bobby Breakout: Login and Signup",
      description: "Login and signup screen for the user to register.",
    },
  ],
};

export default bobbysBreakout;
