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
    year: "2025",
    title: "Realtime collaboration engine",
    client: "Lattice — Platform team",
    problem:
      "Document collaboration was bottlenecked by a Postgres-row-locked architecture, causing 8s+ latency spikes and frequent merge conflicts at >12 concurrent editors.",
    decisions: [
      "Designed a CRDT-based sync layer (Yjs) with delta compaction",
      "Built a horizontally sharded WebSocket fleet on Cloudflare Durable Objects",
      "Introduced per-document presence channels with backpressure",
    ],
    stack: ["TypeScript", "Rust", "Yjs", "Cloudflare DO", "PostgreSQL"],
    outcome: [
      { metric: "94%", label: "p95 latency reduction" },
      { metric: "4M", label: "concurrent editors / wk" },
      { metric: "$1.2M", label: "infra cost saved / yr" },
    ],
    accent: "from-primary/30 to-transparent",
  },
  {
    index: "02",
    year: "2024",
    title: "Internal developer platform",
    client: "Ramp — Infrastructure",
    problem:
      "Service onboarding took ~3 weeks across 6 teams. Inconsistent CI, observability, and deploy patterns made incident response slow and ownership unclear.",
    decisions: [
      "Built a golden-path service template (Backstage + Terraform modules)",
      "Standardized OTel + SLO dashboards across 80+ services",
      "Automated PR-based environment provisioning",
    ],
    stack: ["Go", "Terraform", "Backstage", "OpenTelemetry", "AWS"],
    outcome: [
      { metric: "3w → 2d", label: "service onboarding" },
      { metric: "62%", label: "MTTR reduction" },
      { metric: "80+", label: "services migrated" },
    ],
    accent: "from-accent/30 to-transparent",
  },
  {
    index: "03",
    year: "2023",
    title: "Edge-native checkout SDK",
    client: "Stripe — Acquiring",
    problem:
      "Hosted checkout was rendering at 1.8s LCP in emerging markets, hurting conversion. Legacy bundle was 480KB gzipped with synchronous payment-method probing.",
    decisions: [
      "Rewrote SDK as edge-rendered islands with streaming hydration",
      "Implemented predictive payment-method preloading via Workers KV",
      "Shipped a migration codemod for 14k+ merchant integrations",
    ],
    stack: ["TypeScript", "Preact", "Cloudflare Workers", "WASM"],
    outcome: [
      { metric: "1.8s → 380ms", label: "median LCP" },
      { metric: "+11.4%", label: "checkout conversion" },
      { metric: "62KB", label: "new bundle (gz)" },
    ],
    accent: "from-violet-500/30 to-transparent",
  },
  {
    index: "04",
    year: "2022",
    title: "ML feature store rewrite",
    client: "Confidential fintech",
    problem:
      "Feature pipelines were duplicated across batch and online paths, causing training/serving skew and a 14% drift in fraud model precision over 6 months.",
    decisions: [
      "Unified offline/online compute via a single DSL compiled to Spark + Flink",
      "Introduced point-in-time correctness guarantees with bitemporal storage",
      "Rolled out shadow-mode validation on production traffic",
    ],
    stack: ["Scala", "Flink", "Spark", "Iceberg", "Kafka"],
    outcome: [
      { metric: "0%", label: "training/serving skew" },
      { metric: "+9pts", label: "fraud precision" },
      { metric: "70%", label: "pipeline LOC removed" },
    ],
    accent: "from-emerald-500/30 to-transparent",
  },
];

export const Projects = () => (
  <section id="work" className="container py-32">
    <SectionHeader
      eyebrow="Selected work"
      title={<>Four projects, <em className="italic text-gradient font-light">measurable</em> outcomes.</>}
      description="A small sample of work I can talk about publicly. Each entry is structured around the problem, the engineering decisions, and what shipped."
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
            {/* Left: meta */}
            <div className="md:col-span-4 flex md:flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">{p.index} / {p.year}</div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.client}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500 self-start md:self-end" />
            </div>

            {/* Right: content */}
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
