/**
 * Post-build script that creates route-specific HTML files with correct
 * <title>, description, Open Graph meta tags, and — for blog posts —
 * the full rendered article body so that link unfurlers AND importers
 * (Medium, Slack, Discord, iMessage) see meaningful content without
 * executing JavaScript.
 */

const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const BUILD = path.resolve(__dirname, "..", "build");
const POSTS_DIR = path.resolve(__dirname, "..", "public", "blog", "posts");
const BASE_URL = "https://www.kartikeymishr.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

const baseHtml = fs.readFileSync(path.join(BUILD, "index.html"), "utf-8");

const staticRoutes = [
  {
    route: "/apps",
    title: "Projects — Kartikey Mishr",
    description: "Explore my portfolio of projects and applications.",
  },
  {
    route: "/photography",
    title: "Photography — Kartikey Mishr",
    description: "A collection of moments captured through my lens.",
  },
  {
    route: "/blog",
    title: "Blog — Kartikey Mishr",
    description:
      "Thoughts on engineering, systems design, and building products.",
  },
];

function parseFrontmatter(content) {
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
}

function loadBlogPosts() {
  const indexPath = path.resolve(__dirname, "..", "public", "blog", "index.json");
  if (!fs.existsSync(indexPath)) return [];
  const posts = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  return posts.map((p) => {
    let articleHtml = "";
    const mdPath = path.join(POSTS_DIR, `${p.slug}.md`);
    if (fs.existsSync(mdPath)) {
      const raw = fs.readFileSync(mdPath, "utf-8");
      const { meta, body } = parseFrontmatter(raw);
      const renderedBody = marked.parse(body);
      const dateStr = meta.date
        ? new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "";
      articleHtml = `<article><h1>${meta.title || p.title}</h1>${
        dateStr ? `<time>${dateStr}</time>` : ""
      }${renderedBody}</article>`;
    }

    return {
      route: `/blog/${p.slug}`,
      title: `${p.title} — Kartikey Mishr`,
      description: p.excerpt || "",
      type: "article",
      date: p.date || null,
      articleHtml,
    };
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMetaTag(html, attr, name, value) {
  const identPattern = new RegExp(`\\s${escapeRegex(attr)}="${escapeRegex(name)}"`, "i");
  let matched = false;

  const result = html.replace(/<meta\s[^>]*>/gi, (tag) => {
    if (!identPattern.test(tag)) return tag;
    matched = true;
    const updated = tag.replace(/(\scontent=)"[^"]*"/, `$1"${value}"`);
    if (updated === tag) {
      console.warn(`  ⚠ Found meta[${attr}="${name}"] but could not replace its content attribute`);
    }
    return updated;
  });

  if (!matched) {
    console.warn(`  ⚠ No meta[${attr}="${name}"] found — content was not updated`);
  }

  return result;
}

function injectMeta(html, { title, description, route, type, date, articleHtml }) {
  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  out = replaceMetaTag(out, "name", "description", description);

  out = replaceMetaTag(out, "property", "og:title", title);
  out = replaceMetaTag(out, "property", "og:description", description);
  out = replaceMetaTag(out, "property", "og:url", `${BASE_URL}${route}`);

  if (type === "article") {
    out = replaceMetaTag(out, "property", "og:type", "article");
    if (date) {
      const ogTypeTag = `<meta property="og:type" content="article"`;
      const insertAfter = ogTypeTag + `>`;
      if (!out.includes('property="article:published_time"')) {
        out = out.replace(
          insertAfter,
          `${insertAfter}\n    <meta property="article:published_time" content="${date}">`
        );
      }
    }
  }

  out = replaceMetaTag(out, "name", "twitter:title", title);
  out = replaceMetaTag(out, "name", "twitter:description", description);

  if (articleHtml) {
    out = out.replace('<div id="root"></div>', `<div id="root">${articleHtml}</div>`);
  }

  return out;
}

function writeRouteHtml(routeDef) {
  const dir = path.join(BUILD, routeDef.route);
  fs.mkdirSync(dir, { recursive: true });

  const html = injectMeta(baseHtml, routeDef);
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
  console.log(`  ✓ ${routeDef.route}${routeDef.articleHtml ? " (with article body)" : ""}`);
}

console.log("Pre-rendering meta tags for routes:");

const blogPosts = loadBlogPosts();
const allRoutes = [...staticRoutes, ...blogPosts];

allRoutes.forEach(writeRouteHtml);

console.log(`Done — ${allRoutes.length} route(s) pre-rendered.`);
