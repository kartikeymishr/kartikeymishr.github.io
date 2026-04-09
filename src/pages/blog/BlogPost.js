import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import "./blog.scss";

const parseFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const meta = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      let value = rest.join(":").trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/^"|"$/g, ""));
      }
      meta[key.trim()] = value;
    }
  });

  return { meta, body: match[2] };
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((content) => {
        setPost(parseFrontmatter(content));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="app__blog-post">
        <p className="p-text">Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="app__blog-post">
        <h2 className="head-text">Post not found</h2>
        <Link to="/blog" className="app__blog-post-back">
          &larr; Back to all posts
        </Link>
      </div>
    );
  }

  const tags = Array.isArray(post.meta.tags)
    ? post.meta.tags
    : post.meta.tags
    ? [post.meta.tags]
    : [];

  return (
    <div className="app__blog-post">
      <div className="app__blog-post-layout">
        <aside className="app__blog-sidebar">
          <div className="app__blog-sidebar-section">
            <h4>Navigate</h4>
            <ul className="app__blog-sidebar-links">
              <li>
                <Link to="/blog">&larr; All Posts</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>

          {tags.length > 0 && (
            <div className="app__blog-sidebar-section">
              <h4>Tags</h4>
              <div className="app__blog-sidebar-tags">
                {tags.map((tag) => (
                  <span key={tag} className="app__blog-sidebar-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>

        <motion.div
          className="app__blog-post-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="app__blog-post-back">
            &larr; Back to all posts
          </Link>

          <article className="app__blog-post-article">
            <header>
              <h1 className="head-text">{post.meta.title || slug}</h1>
              {post.meta.date && (
                <time className="p-text">
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {tags.length > 0 && (
                <div className="app__blog-card-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="app__blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="app__blog-post-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.body}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
