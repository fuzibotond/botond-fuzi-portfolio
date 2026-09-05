// Generates dist/sitemap.xml after the build.
// Single source of truth for indexable production URLs.
// When you add or remove an indexable route, update ROUTES below.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://botondfuzi.com";

/** Only canonical, indexable production routes. No hash routes, no 404, no pages.dev. */
const ROUTES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/software-engineer", changefreq: "monthly", priority: "0.9" },
  { path: "/web-development", changefreq: "monthly", priority: "0.9" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const urls = ROUTES.map(
  (r) =>
    `  <url>\n` +
    `    <loc>${SITE_URL}${r.path}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${r.changefreq}</changefreq>\n` +
    `    <priority>${r.priority}</priority>\n` +
    `  </url>`
).join("\n");

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`;

const out = resolve(process.cwd(), "dist", "sitemap.xml");
writeFileSync(out, xml, "utf8");
console.log(`✓ sitemap.xml written with ${ROUTES.length} URLs -> ${out}`);
