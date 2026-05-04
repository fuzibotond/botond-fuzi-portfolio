import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "Lattice",
    role: "Staff Software Engineer, Platform",
    period: "2023 — Present",
    location: "Remote",
    outcomes: [
      "Led realtime collaboration rebuild; 94% p95 latency reduction across the product",
      "Owned platform roadmap for 40+ engineers across 6 product teams",
      "Hired and ramped 7 senior engineers; introduced the company's IC ladder",
    ],
  },
  {
    company: "Stripe",
    role: "Senior Engineer, Acquiring",
    period: "2020 — 2023",
    location: "New York, NY",
    outcomes: [
      "Rewrote checkout SDK on edge runtime; +11.4% global conversion lift",
      "Tech-led migration of 14k+ merchant integrations with zero downtime",
      "Co-authored RFC for streaming payment-method orchestration (still in use)",
    ],
  },
  {
    company: "Vercel",
    role: "Engineering contractor",
    period: "2019 — 2020",
    location: "Remote",
    outcomes: [
      "Shipped Edge Middleware DX surface from prototype to GA",
      "Authored migration guides adopted by 3k+ teams in first quarter",
    ],
  },
  {
    company: "Independent",
    role: "Engineering consultant",
    period: "2016 — 2019",
    location: "Buenos Aires → NYC",
    outcomes: [
      "Series A→B technical advisory for 4 venture-backed startups",
      "Embedded engineer on early teams at two YC companies (one acquired)",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="container py-32">
    <SectionHeader
      eyebrow="Experience"
      title={<>A decade of <em className="italic text-gradient font-light">shipping</em>.</>}
    />

    <div className="relative">
      <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      {roles.map((r, i) => (
        <motion.div
          key={r.company + r.period}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid md:grid-cols-4 gap-6 py-10 border-b border-border/40 last:border-0"
        >
          <div className="md:pl-8 relative">
            <span className="absolute left-[-5px] md:left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="font-mono text-xs text-muted-foreground">{r.period}</div>
            <div className="font-mono text-xs text-muted-foreground/60 mt-1">{r.location}</div>
          </div>

          <div className="md:col-span-3 md:pl-8">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-display text-2xl">{r.company}</h3>
              <span className="text-sm text-muted-foreground">— {r.role}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {r.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
