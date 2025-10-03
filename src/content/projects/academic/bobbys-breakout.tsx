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
    keypoints: [
      "Designed and implemented 2D physics engine from native javascript (bounding boxes, movement vectors, collision detections, etc.) without external libraries.",
      "Pokemon-styled turn-based combat.",
      "2D map with unidirectional movement.",
      "Other notable features: global achievements, item acquisition, item buffs, and inventory management.",
    ],
    short:
      "Full stack browser RPG - play as SFU's Dr. Bobby Chan in a top-down game with the Pokemon-style combat system.",
    long: [],
  },
  images: [
    {
      src: "bobby/bobby-breakout-map_qex5d0",
      alt: "Bobby Breakout: Map",
      description: "In-game screenshot of the map - SFU's CS lab blueprint.",
    },
    {
      src: "bobby/bobby-breakout-inventory_zgwqu1",
      alt: "Bobby Breakout: Inventory",
      description:
        "Player (Bobby's) inventory of picked up loot - user can swap loadouts and equipped items.",
    },
    {
      src: "bobby/bobby-breakout-fight_ccgkbs",
      alt: "Bobby Breakout: Fight Scene",
      description: "Pokemon style fight scene!",
    },
    {
      src: "bobby/bobby-breakout-fight-1_hg4lcd",
      alt: "Bobby Breakout: Fight Scene Player Ability",
      description: "Player using an ability - pokemon style combat dialogue.",
    },
    {
      src: "bobby/bobby-breakout-fight-2_g29dzy",
      alt: "Bobby Breakout: Fight Scene Enemy Ability",
      description: "Enemy retaliating with their custom skills.",
    },
    {
      src: "bobby/bobby-breakout-item_o1u8vm",
      alt: "Bobby Breakout: Funny Items",
      description: "In-game items user can pick up.",
    },
    {
      src: "bobby/bobby-breakout-achievement_tvbixc",
      alt: "Bobby Breakout: Achievement",
      description:
        "Dynamic and persistent achievements screen (stored in database by account session).",
    },
    {
      src: "bobby/bobby-breakout-inventory_zgwqu1",
      alt: "Bobby Breakout: Login and Signup",
      description: "Login and signup screen for the user to register.",
    },
  ],
};

export default bobbysBreakout;
