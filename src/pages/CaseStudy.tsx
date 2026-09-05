import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, MapPin } from "lucide-react";
import { Contact } from "@/components/portfolio/Contact";
import { ProjectShot } from "@/components/ProjectShot";
import { Seo } from "@/components/Seo";
import NotFound from "./NotFound";
import { getProject } from "@/lib/projects";
import { EVENTS, track } from "@/lib/analytics";
import { breadcrumbSchema, creativeWorkSchema, personSchema, webPageSchema } from "@/lib/seo";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-t border-border/40">
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary pt-1">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((it) => (
      <li key={it} className="flex gap-3">
        <span className="text-primary mt-1.5 shrink-0">→</span>
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const CaseStudy = ({ slug }: { slug: string }) => {
  const p = getProject(slug);
  if (!p) return <NotFound />;

  const path = `/work/${p.slug}`;
  const TITLE = `${p.name} — ${p.category} | Botond Füzi`;
  const DESCRIPTION = p.card;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path={path}
        ogType="article"
        jsonLd={[
          personSchema(),
          webPageSchema({ path, title: TITLE, description: DESCRIPTION }),
          creativeWorkSchema({ name: p.name, url: p.url, description: p.overview, caseStudyPath: path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: p.name, path },
          ]),
        ]}
      />

      <article className="container pt-36 md:pt-44 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted-foreground mb-6">
            <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{p.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {p.category}
          </div>
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
            {p.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(EVENTS.projectView, { project: p.slug, target: "live_hero" })}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Visit the live website
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" /> {p.market}
            </span>
          </div>

          <div className="mt-10">
            <ProjectShot src={p.image} alt={p.imageAlt} label={p.name} sublabel={p.category} host={new URL(p.url).host} eager />
          </div>

          <div className="mt-4">
            <Section title="Overview"><p>{p.overview}</p></Section>
            <Section title="The business"><p>{p.context}</p></Section>
            <Section title="The need"><p>{p.need}</p></Section>
            <Section title="What I built"><p>{p.solution}</p></Section>
            <Section title="My responsibilities"><List items={p.responsibilities} /></Section>
            <Section title="Key functionality"><List items={p.functionality} /></Section>
            <Section title="Deployment & upkeep"><p>{p.deploymentMaintenance}</p></Section>
            <Section title="Built with">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border/80 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </Section>
          </div>

          {/* CTA */}
          <div className="mt-12 glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              Need a website for your business?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              I can take your site from idea to live — and keep it running afterwards. See{" "}
              <Link to="/web-development" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                web development for businesses
              </Link>{" "}
              or get in touch directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={() => track(EVENTS.webDevCta, { location: "case_study", project: p.slug })}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Tell me about your project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
              >
                See other work
              </Link>
            </div>
          </div>
        </motion.div>
      </article>

      <Contact />
    </main>
  );
};

export default CaseStudy;
