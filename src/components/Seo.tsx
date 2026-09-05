import { Head } from "vite-react-ssg";
import { abs, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  /** Site-relative canonical path, e.g. "/software-engineer". */
  path: string;
  ogType?: "website" | "profile" | "article";
  image?: string;
  noindex?: boolean;
  /** One or more JSON-LD objects to embed. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Reusable per-route head manager. Renders into static HTML at build time
 * (vite-react-ssg) and updates on client navigation. Owns the authoritative
 * title, description, canonical, Open Graph, Twitter, robots and JSON-LD.
 */
export const Seo = ({
  title,
  description,
  path,
  ogType = "website",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
}: SeoProps) => {
  const url = abs(path);
  const img = abs(image);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
};
