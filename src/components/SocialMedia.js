import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import AppsOutlined from "@mui/icons-material/AppsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import ArticleOutlined from "@mui/icons-material/ArticleOutlined";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <Link to="/apps" aria-label="Apps">
        <div>
          <AppsOutlined />
        </div>
      </Link>
      <Link to="/photography" aria-label="Photography">
        <div>
          <CameraAltOutlined />
        </div>
      </Link>
      <Link to="/blog" aria-label="Blog">
        <div>
          <ArticleOutlined />
        </div>
      </Link>

      <div className="app__social-separator" />

      <a
        href="https://github.com/kartikeymishr"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/kartikeymishr/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
