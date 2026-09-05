// Central SEO configuration and JSON-LD builders.
// Single source of truth for site identity, canonical host, and structured data.
// NOTE: When you add/remove an indexable route, also update scripts/generate-sitemap.mjs.

export const SITE_URL = "https://botondfuzi.com";
export const SITE_NAME = "Botond Füzi";
export const DEFAULT_OG_IMAGE = "/og.png"; // 1200x630 — see docs/og-image-template.html

export const PERSON = {
  name: "Botond Füzi",
  jobTitle: "Software Engineer",
  email: "botond.fuzi.dev@gmail.com",
  locality: "Odense",
  region: "Fyn",
  country: "Denmark",
  sameAs: [
    "https://github.com/fuzibotond",
    "https://www.linkedin.com/in/botond-fuzi/",
    "https://www.instagram.com/botond.fuzi/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Backend Development",
    "Full-Stack Development",
    "Java",
    "Spring Boot",
    "Angular",
    "TypeScript",
    "Python",
    "REST APIs",
    "SQL",
    "Docker",
    "Kubernetes",
    "Cloud Computing",
    "Web Development",
    "AI-enabled applications",
  ],
} as const;

/** Absolute URL for a site-relative path. */
export const abs = (path: string): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

type JsonLd = Record<string, unknown>;

/** Person schema — used site-wide to associate the domain with Botond Füzi. */
export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    url: SITE_URL,
    jobTitle: PERSON.jobTitle,
    email: `mailto:${PERSON.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.locality,
      addressRegion: PERSON.region,
      addressCountry: "DK",
    },
    sameAs: [...PERSON.sameAs],
    knowsAbout: [...PERSON.knowsAbout],
  };
}

/** WebSite schema — establishes the site entity. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${SITE_NAME} — Software Engineer`,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

/** WebPage schema for a specific page. */
export function webPageSchema(opts: { path: string; title: string; description: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

/** BreadcrumbList for a sub-page. */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Service schema for the web-development offering (truthful: a freelance service, area-served, no fake ratings). */
export function webDevServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web development",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "City", name: "Odense" },
      { "@type": "AdministrativeArea", name: "Fyn" },
      { "@type": "Country", name: "Denmark" },
    ],
    url: `${SITE_URL}/web-development`,
    description:
      "Custom websites and web applications for small and medium-sized businesses in Odense, Fyn and across Denmark.",
  };
}
