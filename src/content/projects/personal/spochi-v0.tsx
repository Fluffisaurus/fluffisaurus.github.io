import { Project } from "../interfaces";

const spochiV0: Project = {
  // nba-data-viz
  abbr: "nba-data-viz",
  name: "NBA Data Visualization",
  date: "Aug 2019 - Present",
  tags: ["D3", "React", "Python", "Flask", "JS"],
  category: "Web App / Tool",
  link: {
    repo: "",
    host: "",
  },
  detail: {
    short:
      "[In Progress] Full-stack data visualization tool. Analyze NBA player's stats through interactive visualizations. ",
    long: [],
  },
  images: [
    {
      src: "fbdv/fbdv-brush_dyyvul.png",
      alt: "NBA Data Viz: Brush Selection",
      description:
        "User can brush select data - in the future user will be able to further interact with this selection, ie. visualize subset with another graph.",
    },
    {
      src: "fbdv/fbdv-zoom_gk5hzh.png",
      alt: "NBA Data Viz: Zoom",
      description:
        "Zooming at different levels with history being saved. User can undo, redo, and reset.",
    },
    {
      src: "fbdv/fbdv-zoom-1_xzst3f.png",
      alt: "NBA Data Viz: Zoom",
      description: "Zooming further to subset the data seen.",
    },
    {
      src: "fbdv/fbdv-assists_vsuh6v.png",
      alt: "NBA Data Viz: Assists - Different Stats",
      description:
        "Visualize different box score metrics - in future iterations, the user will be able to graph and tabularize all box score data.",
    },
    {
      src: "fbdv/fbdv-tooltip_s7opov.png",
      alt: "NBA Data Viz: Tooltip",
      description:
        "Tooltip to show respective data of the point - in the future will include more detail and will be interactable.",
    },
  ],
};

export default spochiV0;
