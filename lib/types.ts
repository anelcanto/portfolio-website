import { links } from "./data";


export type SectionName = (typeof links)[number]["name"];


export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string; // or StaticImageData
    projectLink?: string; // Make optional or required
  }