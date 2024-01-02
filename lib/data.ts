import React from "react";
import c2 from "@/public/c2.png"
import thread from "@/public/thread.png"
import wfa from "@/public/wfa.png"
import csa from "@/public/csa.png"
import grlLogo from "@/public/grl.png"
import presLogo from "@/public/pres.png"

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
    company: "Prescinto Technologies",
    title: "Technical Manager",
    location: "Bangalore, IN",
    description: `
    As Technical Manager at Prescinto, I spearheaded the enhancement of our data ingestion pipelines, focusing on MQTT and FTP systems. My role involved modernizing these pipelines to ensure they could seamlessly auto-scale, leveraging Azure services like Azure MQTT and Azure SFTP. This initiative aimed to create robust, auto-scaling solutions for efficient data handling. Throughout,these initiatives not only optimized technical operations but also resulted in tangible cost savings, heightened reliability, and scalability across our infrastructure.
      `,
    icon: React.createElement("img", { src: presLogo.src }),
    date: "August 2023 - February 2024",
  },
  {
    company: "Granite River Labs",
    title: "Software Development Manager",
    location: "Bangalore, IN",
    description:
      `As Engineering Manager at GRL, I led a team of 18 engineers, driving the design and development of certification solutions for Wi-Fi, Thread, Chip, and Wi-SUN standards. I accelerated client development by shifting to gRPC, automated Wi-Fi certification to reduce costs, and streamlined testing efforts by 50% using microservices. Also, I introduced a sandbox framework for our Angular app, boosting development speed and maintainability.`,
    icon: React.createElement("img", { src: grlLogo.src }),
    date: "October 2013 - July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "FTP & MQTT Data Ingestion Services",
    description:
      "",
    tags: ["Azure", "C#", "Kubernetes", "Docker", "Postgre"],
    imageUrl: presLogo,
  },
  {
    title: "CSA Matter Test Suite",
    description:
      "",
    tags: ["Angular", "Python", "FastAPI", "Postgre", "Docker"],
    imageUrl: csa,
  },
  {
    title: "WFA Quick Track Tool",
    description:
      "",
    tags: ["React", "Python", "Java", "Mobex", "Micronaut", "Azure"],
    imageUrl: wfa,
  },
  {
    title: "Thread Test Harness",
    description:
      "",
    tags: ["Javascript", "Python", "Flask", "CSS"],
    imageUrl: thread,
  },
  {
    title: "GRL USB C2 Certification tool",
    description:
      "",
    tags: ["C#", "React", ".Net Core", "Blazor", "Fluxor"],
    imageUrl: c2,
  },
] as const;

export const technicalSkills = [
  "C#",
  "Python",
  "Javascript/Typescript",
  "React/NextJS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Angular",
  "Blazor",
  ".Net Core",
  "Flask",
  "FastAPI",
  "WPF",
];


export const methodology = [
  "Agile methodology",
  "MVC",
  "C4 Model",
  "Micorservices",
  "MVVM",
  "Containerization",
  "System Desing",
  "Data Structures"
];

export const tools = [
  "Jenkins",
  "Git",
  "Github Actions",
  "Structurizr",
  "JIRA",
  "ESF",
  "PlantUML",
  "Selenium",
  "ispirer",
  "Icepanel",
  "Zoho"
];