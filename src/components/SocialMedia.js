import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import AppsOutlined from "@mui/icons-material/AppsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import ArticleOutlined from "@mui/icons-material/ArticleOutlined";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <Tooltip title="Apps" placement="right" arrow>
        <Link to="/apps" aria-label="Apps">
          <div>
            <AppsOutlined />
          </div>
        </Link>
      </Tooltip>
      <Tooltip title="Photography" placement="right" arrow>
        <Link to="/photography" aria-label="Photography">
          <div>
            <CameraAltOutlined />
          </div>
        </Link>
      </Tooltip>
      <Tooltip title="Blog" placement="right" arrow>
        <Link to="/blog" aria-label="Blog">
          <div>
            <ArticleOutlined />
          </div>
        </Link>
      </Tooltip>

      <div className="app__social-separator" />

      <Tooltip title="GitHub" placement="right" arrow>
        <a
          href="https://github.com/kartikeymishr"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsGithub />
          </div>
        </a>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="right" arrow>
        <a
          href="https://www.linkedin.com/in/kartikeymishr/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsLinkedin />
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
