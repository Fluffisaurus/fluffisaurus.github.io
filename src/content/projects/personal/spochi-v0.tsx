import { Project } from "../interfaces";

const spochiV0: Project = {
  // nba-data-viz
  abbr: "nba-data-viz",
  name: "NBA Data Visualization",
  date: "Aug 2019 - Oct 2019",
  tags: ["D3", "React", "Python", "Flask", "JS"],
  category: "Interactive Data Visualization Tool",
  link: {
    repo: "", // repo bball-data-viz
    host: "https://angushon.io/bball-data-viz/",
    hostCTA: "Try it here",
  },
  detail: {
    keypoints: [
      "Exploratory project that blends my passions of basketball, data analysis, and software engineering.",
      "Proof of concept app built from React and D3 for interactive data visualization.",
      "Supports brushed selections, data subsetting, data zooming, tool tips, switching dimensions, and history undo/redo.",
      "Note: this legacy app only works on desktop and does not have a responsive design for mobile or smaller displays.",
    ],
    short: "",
    long: [],
  },
  images: [
    {
      src: "fbdv/fbdv-brush_dyyvul",
      alt: "NBA Data Viz: Brush Selection",
      description:
        "User can brush select data - in the future user will be able to further interact with this selection, ie. visualize subset with another graph.",
    },
    {
      src: "fbdv/fbdv-zoom_gk5hzh",
      alt: "NBA Data Viz: Zoom",
      description:
        "Zooming at different levels with history being saved. User can undo, redo, and reset.",
    },
    {
      src: "fbdv/fbdv-zoom-1_xzst3f",
      alt: "NBA Data Viz: Zoom",
      description: "Zooming further to subset the data seen.",
    },
    {
      src: "fbdv/fbdv-assists_vsuh6v",
      alt: "NBA Data Viz: Assists - Different Stats",
      description:
        "Visualize different box score metrics - in future iterations, the user will be able to graph and tabularize all box score data.",
    },
    {
      src: "fbdv/fbdv-brush_dyyvul",
      alt: "NBA Data Viz: Tooltip",
      description:
        "Tooltip to show respective data of the point - in the future will include more detail and will be interactable.",
    },
  ],
};

export default spochiV0;
