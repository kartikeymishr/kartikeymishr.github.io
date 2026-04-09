import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import git from "../assets/git.png";
import api from "../assets/api.png";
import typescript from "../assets/typescript.svg";
import python from "../assets/python.svg";
import dotnet from "../assets/dotnet.svg";
import zustand from "../assets/zustand.png";
import angular from "../assets/angular.svg";
import kafka from "../assets/kafka.svg";
import aws from "../assets/aws.svg";
import gcp from "../assets/gcp.svg";
import docker from "../assets/docker.svg";

export const fallbackSkills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: java },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: python },
      { name: "C# (.NET)", icon: dotnet },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: react },
      { name: "Redux", icon: redux },
      { name: "Zustand", icon: zustand },
      { name: "Angular", icon: angular },
      { name: "HTML/CSS", icon: html },
    ],
  },
  {
    category: "Backend & Infra",
    items: [
      { name: "Spring Boot", icon: spring },
      { name: "Kafka", icon: kafka },
      { name: "REST APIs", icon: api },
      { name: "AWS", icon: aws },
      { name: "GCP", icon: gcp },
      { name: "Docker", icon: docker },
      { name: "Git", icon: git },
    ],
  },
];

export const fallbackExperiences = [
  {
    year: "2023 - Current",
    works: [
      {
        name: "Software Engineer II",
        company: "McKinsey & Company",
        desc: [
          "Building product-focused applications for life sciences clients, combining GenAI capabilities with robust distributed systems.",
          "Designing and implementing end-to-end workflows that integrate LLMs into production-grade platforms with reliable failure handling.",
          "Contributing to system design decisions across the full stack — from React frontends to Spring Boot and Python microservices on AWS.",
        ],
      },
    ],
  },
  {
    year: "2018 - 2023",
    works: [
      {
        name: "Full Stack Java Developer",
        company: "IBM",
        desc: [
          "Developed multiple RESTFul Microservices for DUR Programs with Spring Boot and IBM DB2 Stored Procedures.",
          "Contributed to converting a monolithic front-end application to a more scalable and maintainable microfrontend architecture with React and Redux.",
          "Trained incoming new hires in Full Stack Development w.r.t. tech stack involved in the project and worked on seamlessly integrating them into the team.",
          "Managed and collaborated on builds and releases across multiple apps with GitHub and Jenkins.",
        ],
      },
      {
        name: "Cloud Microservices Developer",
        company: "IBM",
        desc: [
          "Designed REST APIs with efficient fault tolerance and fallback mechanisms with Feign and Hystrix.",
          "Designed and delivered adapter services for converting incoming and outgoing messages before feeding them to the application.",
          "Worked on implementing Event Driven Microservices with Apache Kafka Messaging System.",
        ],
      },
    ],
  },
];
