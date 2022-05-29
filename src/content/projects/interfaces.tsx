export interface ProjectLink {
  repo: string;
  host: string;
}

export interface ProjectDetail {
  short: string; // sentence or two summary
  long: Array<string>; // extended detail
}

export interface ProjectImage {
  src: string;
  alt: string; // 5-word description
  description: string;
}

export interface Project {
  abbr: string;
  name: string;
  date: string;
  tags: Array<string>;
  category: string;
  link: ProjectLink;
  detail: ProjectDetail;
  images: Array<ProjectImage>;
}
