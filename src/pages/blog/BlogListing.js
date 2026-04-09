import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "./blog.scss";

const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/index.json`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return [...tags].sort();
  }, [posts]);

  const filtered = activeTag
    ? posts.filter((p) => p.tags?.includes(activeTag))
    : posts;

  if (loading) {
    return (
      <div className="app__blog">
        <h2 className="head-text">
          <span>Blog</span>
        </h2>
        <p className="p-text">Loading posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="app__blog">
        <h2 className="head-text">
          <span>Blog</span>
        </h2>
        <p className="p-text app__blog-empty">
          No posts yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="app__blog">
      <Helmet>
        <title>Blog — Kartikey Mishr</title>
        <meta name="description" content="Thoughts on engineering, systems design, and building products." />
        <meta property="og:title" content="Blog — Kartikey Mishr" />
        <meta property="og:description" content="Thoughts on engineering, systems design, and building products." />
        <meta property="og:url" content="https://www.kartikeymishr.com/blog" />
        <meta name="twitter:title" content="Blog — Kartikey Mishr" />
        <meta name="twitter:description" content="Thoughts on engineering, systems design, and building products." />
      </Helmet>
      <div className="app__blog-header">
        <h2 className="head-text">
          <span>Blog</span>
        </h2>
      </div>

      <div className="app__blog-layout">
        <aside className="app__blog-sidebar">
          {allTags.length > 0 && (
            <div className="app__blog-sidebar-section">
              <h4>Categories</h4>
              <div className="app__blog-sidebar-tags">
                <button
                  className={`app__blog-sidebar-tag ${
                    !activeTag ? "app__blog-sidebar-tag--active" : ""
                  }`}
                  onClick={() => setActiveTag(null)}
                >
                  all
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`app__blog-sidebar-tag ${
                      activeTag === tag
                        ? "app__blog-sidebar-tag--active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveTag(activeTag === tag ? null : tag)
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="app__blog-sidebar-section">
            <h4>Links</h4>
            <ul className="app__blog-sidebar-links">
              <li>
                <Link to="/">&larr; Home</Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="app__blog-list">
          {filtered.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="app__blog-card">
                <div
                  className="app__blog-card-image"
                  style={
                    post.image
                      ? { backgroundImage: `url(${post.image})` }
                      : undefined
                  }
                >
                  {!post.image && (
                    <span className="app__blog-card-image-placeholder">
                      &#9998;
                    </span>
                  )}
                </div>
                <div className="app__blog-card-body">
                  <div className="app__blog-card-meta">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <div className="app__blog-card-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="app__blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="bold-text">{post.title}</h3>
                  <p className="p-text">{post.excerpt}</p>
                  <span className="app__blog-read-more">Read more &rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
