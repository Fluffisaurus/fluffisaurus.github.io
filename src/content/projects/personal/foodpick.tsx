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
  images: [],
};

export default foodpick;
