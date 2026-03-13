import { Project } from "../interfaces";

const motionArt: Project = {
  abbr: "motion-art",
  name: "Motion Art",
  date: "Sep 2018 - Dec 2018",
  tags: ["Java", "Android Studio", "Sensors", "Activity Lifecycle"],
  category: "Location & Map-based Drawing App",
  link: {
    repo: "",
    host: "",
  },
  detail: {
    keypoints: [
      "MVP of a map-based drawing app that utilizes user location and draws based on movement",
      "Built on Android Studio practicing industry standards and proper user interface.",
      "Doubles as a simple drawing app when not in map mode.",
    ],
    short:
      "Experimental Android drawing application that maps device movement as drawing strokes on a canvas.",
    long: [],
  },
  images: [
    {
      src: "motionart/motionart3_apfgbp",
      description: "Default screen.",
    },
    {
      src: "motionart/motionart1_qpfk2u",
      description: "Brush size select interface.",
    },
    {
      src: "motionart/motionart2_ndtreo",
      description: "Demo of MotionArt's palette changer.",
    },
    {
      src: "motionart/motionart4_sep5by",
      description: "Renaming the current artboard.",
    },
    {
      src: "motionart/motionart5_xnv0yh",
      description: "A sample drawing done on the app.",
    },
  ],
};

export default motionArt;
