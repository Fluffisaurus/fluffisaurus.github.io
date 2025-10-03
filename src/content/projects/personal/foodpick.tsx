import { Project } from "../interfaces";

const foodpick: Project = {
  // foodpick
  abbr: "foodpick",
  name: "FoodPick",
  date: "Jun 2018 - Mar 2019",
  tags: ["React", "Redux", "JS", "NodeJS", "CSS"],
  category: "Web and Mobile App",
  link: {
    repo: "https://github.com/kca99/foodpick-native",
    host: "",
  },
  detail: {
    keypoints: [
      "Lightweight mobile and desktop application that utilizes Google Places API.",
      "Randomly generates food options based on location and selected cuisine.",
      "Interactive UI with text search, tabs, and map view.",
      "React with Redux to manage all user interactions and prior selections.",
    ],
    short:
      "Multiplatform random cuisine picker. Uses a randomizer for a the cuisines to feed into the Google Places API to generate suggestions!",
    long: [],
  },
  images: [],
};

export default foodpick;
