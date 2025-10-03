import { Project } from "./interfaces";

import ggj2020 from "./personal/ggj-2020";
import spochiV0 from "./personal/spochi-v0";
import websiteV1 from "./personal/website-v1";
import foodpick from "./personal/foodpick";
import fallingBlocks from "./personal/falling-blocks";

const PersonalProjects: Project[] = [
  ggj2020,
  spochiV0,
  websiteV1,
  foodpick,
  fallingBlocks,
];

import bobbysBreakout from "./academic/bobbys-breakout";
import playerPerformanceProjection from "./academic/player-performance-projection";
import motionArt from "./academic/motion-art";
import kingdomOfHelios from "./academic/kingdom-of-helios";
import antlionTowerDefense from "./academic/antlion-tower-defense";

const AcademicProjects: Project[] = [
  playerPerformanceProjection,
  bobbysBreakout,
  kingdomOfHelios,
  antlionTowerDefense,
  motionArt,
];

type ProjectGroupArray = Project[];
enum ProjectCategories {
  PERSONAL = "personal",
  ACADEMIC = "academic",
}

const ProjectList: Record<ProjectCategories, ProjectGroupArray> = {
  personal: PersonalProjects,
  academic: AcademicProjects,
};

export { ProjectList, ProjectCategories };
export type { ProjectGroupArray };
