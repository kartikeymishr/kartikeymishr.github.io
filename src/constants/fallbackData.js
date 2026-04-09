import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import git from "../assets/git.png";
import api from "../assets/api.png";

export const fallbackSkills = [
  { name: "React", icon: react },
  { name: "JavaScript", icon: javascript },
  { name: "Redux", icon: redux },
  { name: "Java 8", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Sass", icon: sass },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Git", icon: git },
  { name: "REST APIs", icon: api },
];

export const fallbackExperiences = [
  {
    year: "2020 - Current",
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
    ],
  },
  {
    year: "2018 - 2023",
    works: [
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
