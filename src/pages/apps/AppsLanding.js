import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../constants/projects";
import "./apps.scss";

const AppsLanding = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (tag === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((p) => p.tags.includes(tag)));
      }
    }, 500);
  };

  return (
    <div className="app__apps">
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div className="app__apps-filter">
        {tags.map((tag) => (
          <div
            key={tag}
            onClick={() => handleFilter(tag)}
            className={`app__apps-filter-item app__flex p-text ${
              activeFilter === tag ? "item-active" : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__apps-grid"
      >
        {filteredProjects.map((project) => (
          <Link
            to={`/apps/${project.slug}`}
            key={project.slug}
            className="app__apps-card"
          >
            <div className="app__apps-card-img">
              <img src={project.thumbnail} alt={project.title} />
            </div>
            <div className="app__apps-card-content">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text">{project.excerpt}</p>
              <div className="app__apps-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="app__apps-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default AppsLanding;
