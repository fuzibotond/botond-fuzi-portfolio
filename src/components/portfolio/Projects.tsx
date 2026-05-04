import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Project {
  index: string;
  year: string;
  title: string;
  client: string;
  problem: string;
  decisions: string[];
  stack: string[];
  outcome: { metric: string; label: string }[];
  accent: string;
}

const projects: Project[] = [
  {
    index: "01",
    year: "2025–2026",
    title: "AI-based pricing & revenue optimization",
    client: "MSc thesis · CompuSoft A/S",
    problem:
      "Campsites and resorts price rooms and pitches mostly by intuition, leaving revenue on the table during peak windows and overpricing during slow ones. Goal: a data-driven decision-support tool that recommends prices from historical bookings, seasonality, and competitor signals.",
    decisions: [
      "Built an ETL pipeline over historical bookings using pandas / dask for feature engineering",
      "Trained baseline regression and gradient-boosted models with scikit-learn, evaluated against a heuristic benchmark",
      "Designed a Dash/AnyChart visualization layer so domain experts can challenge recommendations, not just consume them",
    ],
    stack: ["Python", "scikit-learn", "pandas", "dask", "Dash", "GCP"],
    outcome: [
      { metric: "MSc", label: "thesis in collaboration w/ industry" },
      { metric: "ETL", label: "reproducible feature pipeline" },
      { metric: "UI", label: "explainable recommendations" },
    ],
    accent: "from-primary/30 to-transparent",
  },
  {
    index: "02",
    year: "2022–2024",
    title: "Customer-facing platform rebuild",
    client: "Sonrisa — Software Engineer",
    problem:
      "The product needed a faster delivery cadence and a more reliable backend while still serving European clients without regressions. Existing flows had thin test coverage and unclear ownership between backend and frontend.",
    decisions: [
      "Owned features end-to-end across Spring Boot REST APIs and Angular components",
      "Brought critical modules to 100% unit-test coverage with JUnit + Mockito",
      "Shipped on a two-week Scrum cadence with QA/PM, documenting features for clients and internal use",
    ],
    stack: ["Java", "Spring Boot", "Angular", "TypeScript", "JUnit", "Mockito"],
    outcome: [
      { metric: "5 mo", label: "MVP delivered (phase 1)" },
      { metric: "100%", label: "coverage on critical modules" },
      { metric: "2-wk", label: "release cadence" },
    ],
    accent: "from-accent/30 to-transparent",
  },
  {
    index: "03",
    year: "2023–2024",
    title: "Government legacy backend rewrite",
    client: "Sonrisa — Hungarian gov't project",
    problem:
      "A high-security, high-availability legacy system needed to be modernized without breaking the contracts existing services depended on. The team had to maintain functionality bit-for-bit while improving the runtime characteristics.",
    decisions: [
      "Rewrote the backend in Spring Boot, reusing trusted legacy services behind a clean boundary",
      "Mapped existing behavior into integration tests before any rewrite to prevent silent regressions",
      "Tightened request handling and persistence to improve response times under load",
    ],
    stack: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "Docker"],
    outcome: [
      { metric: "0", label: "regressions on rollout" },
      { metric: "↑", label: "system efficiency" },
      { metric: "HA", label: "high-availability target" },
    ],
    accent: "from-violet-500/30 to-transparent",
  },
  {
    index: "04",
    year: "2021–2022",
    title: "Data-collection pipeline & time-tracking app",
    client: "Webapix · WebGurus · CodeSpring — Intern",
    problem:
      "Two parallel internships: one team needed to stop manually collecting competitive data; another needed a small but production-grade time-tracking tool with proper auth and a snappy UX.",
    decisions: [
      "Built Laravel APIs and an automated web-scraping pipeline that removed hours of manual work per week",
      "Shipped Vue/TypeScript components for the time-tracking app with OAuth 2.0 and lazy loading",
      "Added animated frontend touches that made the data tool actually pleasant for non-engineers to use",
    ],
    stack: ["Laravel", "PHP", "Vue", "TypeScript", "OAuth 2.0"],
    outcome: [
      { metric: "hrs/wk", label: "manual work eliminated" },
      { metric: "OAuth", label: "secure auth flow" },
      { metric: "2", label: "production internships" },
    ],
    accent: "from-emerald-500/30 to-transparent",
  },
];

export const Projects = () => (
  <section id="work" className="container py-32">
    <SectionHeader
      eyebrow="Selected work"
      title={<>Four projects, <em className="italic text-gradient font-light">honest</em> outcomes.</>}
      description="A small sample of the work I can talk about. Each entry is structured around the problem, the engineering decisions, and what actually shipped."
    />

    <div className="space-y-6">
      {projects.map((p, i) => (
        <motion.article
          key={p.index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="group relative glass rounded-3xl p-6 md:p-10 hover-lift overflow-hidden"
        >
          <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-radial ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none`} style={{background: `radial-gradient(circle, var(--tw-gradient-stops))`}} />

          <div className="relative grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex md:flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">{p.index} / {p.year}</div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.client}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500 self-start md:self-end" />
            </div>

            <div className="md:col-span-8 space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Problem</div>
                <p className="text-foreground/90 leading-relaxed">{p.problem}</p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Engineering decisions</div>
                <ul className="space-y-1.5">
                  {p.decisions.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border/80 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                {p.outcome.map((o) => (
                  <div key={o.label}>
                    <div className="font-display text-2xl md:text-3xl text-gradient">{o.metric}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{o.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
