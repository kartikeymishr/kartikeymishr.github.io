import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { navbarLinks } from "../../constants/navigation";
import { ThemeContext } from "../../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import pdf from "../../assets/Kartikey-Mishr-CV.pdf";
import "./navbar.scss";

const NavItem = ({ item, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    if (item.type === "hash") {
      e.preventDefault();
      const sectionId = item.path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick();
  };

  if (item.type === "route") {
    return (
      <Link to={item.path} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.path} onClick={handleClick}>
      {item.label}
    </a>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const logo = images.newLogoPurple;

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        {navbarLinks.map((item) => (
          <li key={`link-${item.label}`} className="app__flex p-text">
            <div />
            <NavItem item={item} />
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
              {navbarLinks.map((item) => (
                <li key={item.label}>
                  <NavItem item={item} onClick={() => setToggle(false)} />
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
