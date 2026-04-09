import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { projects } from "../../constants/projects";
import "./apps.scss";

const AppDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="app__app-detail">
        <h2 className="head-text">Project not found</h2>
        <Link to="/apps" className="app__app-detail-back">
          &larr; Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="app__app-detail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/apps" className="app__app-detail-back">
        &larr; Back to all projects
      </Link>

      <h2 className="head-text">{project.title}</h2>

      <div className="app__app-detail-hero">
        <img src={project.thumbnail} alt={project.title} />
      </div>

      <div className="app__app-detail-body">
        <p className="p-text">{project.description}</p>

        <div className="app__app-detail-tech">
          <h4 className="bold-text">Tech Stack</h4>
          <div className="app__app-detail-tech-list">
            {project.techStack.map((tech) => (
              <span key={tech} className="app__apps-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="app__app-detail-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="app__app-detail-link"
            >
              <HiExternalLink /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="app__app-detail-link"
            >
              <AiFillGithub /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AppDetail;
