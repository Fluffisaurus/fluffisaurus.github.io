import { Project } from "../interfaces";

const playerPerformanceProjection: Project = {
  abbr: "player-performance-projection",
  name: "Player Performance Projection",
  date: "Sep 2019 - Dec 2019",
  tags: ["Python", "ML", "ANOVA", "Regression", "ETL", "Data Science"],
  category: "Statistical Analysis",
  link: {
    repo: "https://github.com/Fluffisaurus/player-performance-projection",
    host: "bit.ly/ppp-report",
  },
  detail: {
    short:
      "ML algo to analyze Steph Curry's performance stats. Utilizes ETL for data collection and parsing, GradientBoostingRegressor, and ANOVA.",
    long: [],
  },
  images: [
    {
      src: "ppp/all-3-def-tiers-train-vs-predict_wbfjgm",
      alt: "Training vs predicted",
      description:
        "Training points vs Predicted points and Regression Line against three defenisve tiers.",
    },
    {
      src: "ppp/curry-shots-made-by-minutes_a6ggn3",
      alt: "Steph Curry's shots made by minutes passed in the game",
      description: "Steph Curry's shots made by minutes passed in the game.",
    },
    {
      src: "ppp/plot-nba-def-rating_a4f0ce",
      alt: "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams",
      description:
        "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams.",
    },
    {
      src: "ppp/variance-shot-defs_s0l4ax",
      alt: "Frequency of shots made vs different tiers of deffense",
      description: "Steph's shots made vs different tiers of defense.",
    },
  ],
};

export default playerPerformanceProjection;
