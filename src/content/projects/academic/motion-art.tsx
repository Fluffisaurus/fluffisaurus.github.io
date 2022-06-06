import { Project } from "../interfaces";

const motionArt: Project = {
  abbr: "motion-art",
  name: "Motion Art",
  date: "Sep 2018 - Dec 2018",
  tags: ["Java", "Android Studio", "Sensors", "Activity Lifecycle"],
  category: "Android App",
  link: {
    repo: "",
    host: "",
  },
  detail: {
    short:
      "Experimental Android drawing application that maps device movement as drawing strokes on a canvas.",
    long: [],
  },
  images: [
    {
      src: "motionart/motionart3_apfgbp.jpg",
      alt: "MotionArt: Home Screen",
      description: "Default screen.",
    },
    {
      src: "motionart/motionart1_qpfk2u.jpg",
      alt: "MotionArt: Brush Select ",
      description: "Brush size select interface.",
    },
    {
      src: "motionart/motionart2_ndtreo.jpg",
      alt: "MotionArt: Palette Changer",
      description: "Demo of MotionArt's palette changer.",
    },
    {
      src: "motionart/motionart4_sep5by.jpg",
      alt: "MotionArt: Edit Artboard Name",
      description: "Renaming the current artboard.",
    },
    {
      src: "motionart/motionart5_xnv0yh.jpg",
      alt: "Made with MotionArt app",
      description: "A sample drawing done on the app.",
    },
  ],
};

export default motionArt;
