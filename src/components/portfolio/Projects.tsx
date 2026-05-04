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
  title: "Internal device configuration platform",
  client: "Sonrisa — Software Engineer",
  problem:
    "The company lacked a centralized system to manage and update configurations for their grain measuring devices. Configuration changes were handled manually across multiple systems, leading to inconsistencies, slow rollout times, and a high risk of errors in production devices.",
  decisions: [
    "Developed backend features using Java 21 and Spring Boot, ensuring reliable APIs for device configuration management",
    "Contributed to Angular frontend components and RxJS flows to support cross-functional delivery",
    "Collaborated closely with senior engineers, QA, and product owner in a team of 8 to align on requirements and best practices",
    "Worked in a two-week Scrum cadence with regular planning and retrospective meetings",
  ],
  stack: ["Java", "Spring Boot", "Angular", "TypeScript", "RxJS"],
  outcome: [
    { metric: "2-wk", label: "Sprint delivery cycle" },
    { metric: "8 ppl", label: "Cross-functional team" },
    { metric: "Full", label: "Centralized device configuration system" },
  ],
  accent: "from-accent/30 to-transparent",
},
  {
    index: "03",
    year: "2023–2024",
    title: "Legacy backend rewrite",
    client: "Sonrisa — Hungarian gov't project",
    problem:
      "A high-security, high-availability legacy system needed to be modernized without breaking the contracts existing services depended on. The team had to maintain functionality bit-for-bit while improving the runtime characteristics.",
    decisions: [
      "Rewrote the backend in Spring Boot, reusing trusted legacy services behind a clean boundary",
      "Mapped existing behavior into integration tests before any rewrite to prevent silent regressions",
      "Tightened request handling and persistence to improve response times under load",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "Wicket"],
    outcome: [
      { metric: "0", label: "regressions on rollout" },
      { metric: "↑", label: "system efficiency" },
      { metric: "HA", label: "high-availability target" },
    ],
    accent: "from-violet-500/30 to-transparent",
  },
  {
  index: "04",
  year: "2021",
  title: "Time-tracking web application",
  client: "WebGurus — Intern",
  problem:
    "The team needed a simple but production-ready time-tracking tool for internal use, with secure authentication and a responsive user experience for daily logging.",
  decisions: [
    "Built backend features using Laravel and PHP for time tracking and user management",
    "Developed Vue.js components with TypeScript to create a responsive and user-friendly interface",
    "Implemented OAuth 2.0 authentication for secure access",
    "Collaborated in a team of 5 developers during a 2-month internship",
  ],
  stack: ["Laravel", "PHP", "Vue", "TypeScript", "OAuth 2.0"],
  outcome: [
    { metric: "2 mo", label: "internship duration" },
    { metric: "5 ppl", label: "team collaboration" },
    { metric: "MVP", label: "functional time-tracking system" },
  ],
  accent: "from-emerald-500/30 to-transparent",
},
{
  index: "05",
  year: "2022",
  title: "Data collection & web-scraping automation",
  client: "WebApix — Intern",
  problem:
    "The company relied on manual collection of competitor and market data, which was time-consuming, repetitive, and prone to human error.",
  decisions: [
    "Developed PHP-based scripts and Laravel APIs to automate data collection workflows",
    "Built web-scraping solutions to gather structured data from external sources",
    "Created Vue.js components and added UI animations to improve usability for non-technical users",
    "Worked on multiple client-facing projects during a 4-month internship",
  ],
  stack: ["PHP", "Laravel", "Vue", "JavaScript", "Web Scraping"],
  outcome: [
    { metric: "4 mo", label: "internship duration" },
    { metric: "hrs/wk", label: "manual work reduced" },
    { metric: "multi", label: "projects delivered" },
  ],
  accent: "from-emerald-500/30 to-transparent",
},
{
  index: "06",
  year: "2021–2022",
  title: "Backend & OOP intensive training",
  client: "CodeSpring — Trainee",
  problem:
    "Accelerate practical backend development skills and gain hands-on experience with modern frameworks and object-oriented programming.",
  decisions: [
    "Completed a 2-week intensive course covering OOP, Spring Boot, and Hibernate (2021)",
    "Attended additional .NET and C# training sessions across 4 occasions (2022)",
    "Built small practice applications to reinforce backend concepts and architecture patterns",
  ],
  stack: ["Java", "Spring Boot", "Hibernate", "C#", ".NET"],
  outcome: [
    { metric: "2 wk", label: "Java bootcamp" },
    { metric: "4x", label: ".NET sessions" },
    { metric: "core", label: "backend foundations built" },
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
