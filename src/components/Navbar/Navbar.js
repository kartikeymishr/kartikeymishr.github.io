import React, { useState, useContext } from "react";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { navigation } from "../../constants/navigation";
import { ThemeContext } from "../../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import pdf from "../../assets/Kartikey-Mishr-CV.pdf";
import "./navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const logo = images.newLogoPurple;

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>

      <ul className="app__navbar-links">
        {navigation.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-right">
        <IconButton
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="app__navbar-theme-toggle"
        >
          {theme === "dark" ? (
            <LightModeIcon sx={{ color: "#ffc107" }} />
          ) : (
            <DarkModeIcon sx={{ color: "var(--secondary-color)" }} />
          )}
        </IconButton>
        <a
          className="app__navbar-resume-btn"
          href={pdf}
          download="Kartikey Mishr CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navigation.map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="app__navbar-menu-bottom">
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="app__navbar-theme-toggle"
              >
                {theme === "dark" ? (
                  <LightModeIcon sx={{ color: "#ffc107" }} />
                ) : (
                  <DarkModeIcon sx={{ color: "var(--secondary-color)" }} />
                )}
              </IconButton>
              <a
                className="app__navbar-resume-btn"
                href={pdf}
                download="Kartikey Mishr CV.pdf"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
