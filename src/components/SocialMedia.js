import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import MuiTooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AppsOutlined from "@mui/icons-material/AppsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import ArticleOutlined from "@mui/icons-material/ArticleOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";

const StyledTooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--secondary-color, #8758ff)",
    color: "#ffffff",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    letterSpacing: "0.03em",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--secondary-color, #8758ff)",
  },
});

const routeIcons = [
  { path: "/apps", label: "Apps", Icon: AppsOutlined },
  { path: "/photography", label: "Photography", Icon: CameraAltOutlined },
  { path: "/blog", label: "Blog", Icon: ArticleOutlined },
];

const SocialMedia = () => {
  const { pathname } = useLocation();
  const isSubRoute = routeIcons.some(({ path }) => pathname.startsWith(path));

  const otherRoutes = routeIcons.filter(({ path }) => !pathname.startsWith(path));

  return (
    <div className="app__social">
      {isSubRoute && (
        <StyledTooltip title="Home" placement="right" arrow>
          <Link to="/" aria-label="Home">
            <div><HomeOutlined /></div>
          </Link>
        </StyledTooltip>
      )}
      {(isSubRoute ? otherRoutes : routeIcons).map(({ path, label, Icon }) => (
        <StyledTooltip key={path} title={label} placement="right" arrow>
          <Link to={path} aria-label={label}>
            <div><Icon /></div>
          </Link>
        </StyledTooltip>
      ))}

      <div className="app__social-separator" />

      <StyledTooltip title="GitHub" placement="right" arrow>
        <a
          href="https://github.com/kartikeymishr"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsGithub />
          </div>
        </a>
      </StyledTooltip>
      <StyledTooltip title="LinkedIn" placement="right" arrow>
        <a
          href="https://www.linkedin.com/in/kartikeymishr/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsLinkedin />
          </div>
        </a>
      </StyledTooltip>
    </div>
  );
};

export default SocialMedia;
