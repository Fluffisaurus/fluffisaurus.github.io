export interface ProjectLink {
  repo: string;
  host: string;
}

export interface ProjectDetail {
  short: string; // sentence or two summary
  long: string[]; // extended detail
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
  tags: string[];
  category: string;
  link: ProjectLink;
  detail: ProjectDetail;
  images: ProjectImage[];
}
