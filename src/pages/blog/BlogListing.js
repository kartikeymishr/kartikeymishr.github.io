import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./blog.scss";

const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h2 className="head-text">
        <span>Blog</span>
      </h2>

      <div className="app__blog-list">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.slug}`} className="app__blog-card">
              <div className="app__blog-card-meta">
                <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <div className="app__blog-card-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="app__blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="bold-text">{post.title}</h3>
              <p className="p-text">{post.excerpt}</p>
              <span className="app__blog-read-more">Read more &rarr;</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
