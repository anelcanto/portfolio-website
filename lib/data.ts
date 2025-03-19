import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// images
import theGrid from "@/public/images/the_grid_app.png";
import webToClickUp from "@/public/images/web_to_click_up.png";
import resumeBuilder from "@/public/images/resume_builder.png";
// icons
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

// import { Project } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer & Project Manager",
    location: "HK Consulting Inc.",
    date: "2024",
    description: "Built scalable web apps with React.js, Node.js, and AWS Cloud. Led Agile workflows and implemented CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Developer",
    location: "Ion Solar",
    date: "2023",
    description: "Developed RESTful APIs in Ruby on Rails, optimized database queries, and integrated CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Computer Science Teaching Assistant",
    location: "Brigham Young University–Hawaii",
    date: "2023",
    description: "Taught Object-Oriented Programming and mentored students in Java and Ruby.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Help Desk Support",
    location: "Kahuku Medical Center",
    date: "2021",
    description: "Automated workflows using Visual Basic and provided IT support and training.",
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Resume Builder",
    description: "An application that leverages a custom GPT model to tailor resumes according to specific job descriptions, enhancing job seekers' chances by aligning their resumes with desired roles.",
    tags: [
      "AI Integration",
      "TypeScript",
      "GPTs",
      "Next.js",
      "React",
    ],
    imageUrl: resumeBuilder,
    projectLink: "https://resume-builder.anelcanto.com/",
  },
  {
    title: "The Grid",
    description: "Developed as a Ruby on Rails application for ION Solar, focusing on robust API integrations, background job processing, and efficient data management.",
    tags: ["Ruby on Rails", "Ruby", "Sidekiq", "API", "SQL", "React Native"],
    imageUrl: theGrid, 
    projectLink: "https://www.ionsolar.com/thegrid",
  },
  {
    title: "Web to ClickUp",
    description: "A Chrome extension that integrates with ClickUp to enhance productivity and task management.",
    tags: [
      "Chrome Extension",
      "TypeScript",
      "CRM Integrations",
      "React",
      "RESTful APIs",
      "JavaScript"
    ],
    imageUrl: webToClickUp,
    projectLink: "https://webtoclickup.dolphinwebdynamics.com/", 
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,

  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },

  // {
  //   title: "Anel Tools",
  //   description: "A collection of utility scripts and tools built to enhance developer productivity, featuring automation scripts, command-line utilities, and integrations.",
  //   tags: ["Node.js", "JavaScript", "CLI", "Automation"],
  //   imageUrl: "", // Image will be added later
  // },
] as const;

export const skillsData = [
  "Java",
  "React.js",
  "AWS Cloud",
  "JavaScript",
  "Node.js",
  "SQL",
  "Ruby",
  "Ruby on Rails",
  "CI/CD",
  "Git",
  "Jira",
  "Sidekiq",
  "Object-Oriented Programming",
  "Visual Basic",
  "HTML",
  "CSS",
  "Figma"
] as const;
