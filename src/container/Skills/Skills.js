import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { AppWrap, MotionWrap } from "../../wrapper";
import {
  fallbackSkills,
  fallbackExperiences,
} from "../../constants/fallbackData";
import "./skills.scss";

const MAX_BULLETS = 3;

const ExpPill = ({ exp, onClick }) => {
  const totalBullets = exp.works.reduce(
    (sum, w) => sum + (w.desc?.length || 0),
    0
  );
  const hasOverflow = totalBullets > MAX_BULLETS;
  let bulletsShown = 0;

  return (
    <motion.div
      className="app__skills-exp-item app__skills-exp-pill"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="app__skills-exp-card">
        <div className="app__skills-exp-year">
          <p className="bold-text">{exp.year}</p>
        </div>
        <div className="app__skills-exp-works">
          {exp.works.map((work) => {
            if (bulletsShown >= MAX_BULLETS) return null;
            const remaining = MAX_BULLETS - bulletsShown;
            const visibleDesc = (work.desc || []).slice(0, remaining);
            bulletsShown += visibleDesc.length;

            return (
              <div key={work.name}>
                <div className="app__skills-exp-title">
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </div>
                {visibleDesc.length > 0 && (
                  <ul>
                    {visibleDesc.map((item, i) => (
                      <li key={i}>
                        <p className="p-text">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          {hasOverflow && (
            <p className="app__skills-exp-more p-text">...</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ExpOverlay = ({ exp, onClose }) => (
  <motion.div
    className="app__skills-overlay-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClose}
  >
    <motion.div
      className="app__skills-overlay-panel"
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 30 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton
        className="app__skills-overlay-close"
        onClick={onClose}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>

      <div className="app__skills-overlay-year">
        <p className="bold-text">{exp.year}</p>
      </div>

      <div className="app__skills-overlay-content">
        {exp.works.map((work) => (
          <div className="app__skills-overlay-role" key={work.name}>
            <h4 className="bold-text">{work.name}</h4>
            <p className="p-text app__skills-overlay-company">
              {work.company}
            </p>
            <ul>
              {work.desc?.map((item, i) => (
                <li key={i}>
                  <p className="p-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Skills = () => {
  const experience = fallbackExperiences;
  const skills = fallbackSkills;
  const [expandedYear, setExpandedYear] = useState(null);

  const expandedExp = expandedYear
    ? experience.find((e) => e.year === expandedYear)
    : null;

  const closeOverlay = useCallback(() => setExpandedYear(null), []);

  return (
    <>
      <h2 className="head-text">Skills and Work Experience</h2>
      <div className="app__skills-container">
        <div className="app__skills-list">
          {skills.map((group) => (
            <div className="app__skills-category" key={group.category}>
              <h4 className="app__skills-category-title">
                {group.category}
              </h4>
              <div className="app__skills-category-items">
                {group.items.map((skill) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item app__flex"
                    key={skill.name}
                  >
                    <div className="app__flex">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <p className="app__skills-item-label">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="app__skills-exp">
          {experience
            ?.sort((a, b) => (a.year > b.year ? -1 : 1))
            .map((exp) => (
              <ExpPill
                key={exp.year}
                exp={exp}
                onClick={() => setExpandedYear(exp.year)}
              />
            ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedExp && (
          <ExpOverlay exp={expandedExp} onClose={closeOverlay} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "experience",
  "app__whitebg"
);
