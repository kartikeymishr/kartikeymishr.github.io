/**
 * Post-build script that creates route-specific HTML files with correct
 * <title>, description, and Open Graph meta tags so that link unfurlers
 * (Slack, Discord, Twitter, iMessage) see meaningful previews without
 * executing JavaScript.
 *
 * Reads the base build/index.html and generates copies for each known
 * route with the meta tags swapped in.
 */

const fs = require("fs");
const path = require("path");

const BUILD = path.resolve(__dirname, "..", "build");
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

function loadBlogPosts() {
  const indexPath = path.resolve(__dirname, "..", "public", "blog", "index.json");
  if (!fs.existsSync(indexPath)) return [];
  const posts = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  return posts.map((p) => ({
    route: `/blog/${p.slug}`,
    title: `${p.title} — Kartikey Mishr`,
    description: p.excerpt || "",
    type: "article",
    date: p.date || null,
  }));
}

function replaceMetaTag(html, attr, name, value) {
  const regex = new RegExp(
    `<meta\\s+${attr}="${name}"\\s+content="[^"]*"`,
    "g"
  );
  return html.replace(regex, `<meta ${attr}="${name}" content="${value}"`);
}

function injectMeta(html, { title, description, route, type, date }) {
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

  return out;
}

function writeRouteHtml(routeDef) {
  const dir = path.join(BUILD, routeDef.route);
  fs.mkdirSync(dir, { recursive: true });

  const html = injectMeta(baseHtml, routeDef);
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
  console.log(`  ✓ ${routeDef.route}`);
}

console.log("Pre-rendering meta tags for routes:");

const blogPosts = loadBlogPosts();
const allRoutes = [...staticRoutes, ...blogPosts];

allRoutes.forEach(writeRouteHtml);

console.log(`Done — ${allRoutes.length} route(s) pre-rendered.`);
