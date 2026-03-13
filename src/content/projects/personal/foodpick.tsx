import { Project } from "../interfaces";

const foodpick: Project = {
  // foodpick
  abbr: "foodpick",
  name: "FoodPick",
  date: "Jun 2018 - Mar 2019",
  tags: ["React", "Redux", "JS", "NodeJS", "CSS"],
  category: "Google Places Foodpicking Randomizer",
  link: {
    repo: "https://github.com/kca99/foodpick-native",
    host: "",
  },
  detail: {
    keypoints: [
      "Spawned from two friends with the inability to decide where to eat, we routinely relied on putting options into a randomizer to help choose.",
      "Lightweight mobile/desktop application that utilizes Google Places API to randomly generate food options based on location and chosen cuisine.",
      "Emphasis on friendly user interaction with tabs, search, and storage of user interactions and previous selections/uses of the app via a Redux store.",
      "Simple side-loaded APK used by friends and family to help choose places to eat.",
    ],
    short:
      "Multiplatform random cuisine picker. Uses a randomizer for a the cuisines to feed into the Google Places API to generate suggestions!",
    long: [],
  },
  images: [
    {
      src: "foodpick/foodpick-1_c67qa7",
      description: "Early in development screenshot of in-app randomizer.",
    },
    {
      src: "foodpick/foodpick-6_fglmb6",
      description:
        "Screenshot of weighted user selected cuisines (the bigger the square the more likely it is for selected cuisine to be selected).",
    },
    {
      src: "foodpick/foodpick-8_avfti1",
      description: "Picture of early in development desktop mode.",
    },
    {
      src: "foodpick/foodpick-7_bd9if1",
      description: "App supported on both iOS and Android.",
    },
    {
      src: "foodpick/foodpick-3_ssz4cy",
      description:
        "Design and layout mockup of mobile interface showing food results as a list.",
    },
    {
      src: "foodpick/foodpick-2_ftufto",
      description: "Design mock up of mobile maps view of returned results.",
    },
  ],
};

export default foodpick;
