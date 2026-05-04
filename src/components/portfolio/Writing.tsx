import { motion } from "framer-motion";
import { ArrowUpRight, PenLine } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Note {
  date: string;
  readingTime: string;
  tag: string;
  title: string;
  excerpt: string;
  href?: string;
}

// Edit this list to publish a new note. Set `href` once a post is live.
const notes: Note[] = [
  {
    date: "Coming soon",
    readingTime: "5 min read",
    tag: "Thesis",
    title: "Pricing campsites with data, not gut feeling",
    excerpt:
      "What I'm learning while building an AI-based pricing tool with CompuSoft A/S — feature engineering, baselines that beat hype, and designing a UI domain experts actually trust.",
  },
  {
    date: "Coming soon",
    readingTime: "4 min read",
    tag: "Backend",
    title: "Rewriting a legacy backend without breaking it",
    excerpt:
      "Notes from migrating a high-availability gov't system to Spring Boot: pinning behavior with integration tests first, then refactoring with confidence.",
  },
  {
    date: "Coming soon",
    readingTime: "3 min read",
    tag: "Craft",
    title: "Why I aim for 100% coverage on the code that matters",
    excerpt:
      "Coverage is a bad goal and a useful signal. How I pick which modules deserve full JUnit + Mockito treatment — and which ones really don't.",
  },
];

export const Writing = () => (
  <section id="writing" className="container py-32">
    <SectionHeader
      eyebrow="Writing"
      title={<>Notes from the <em className="italic text-gradient font-light">workbench</em>.</>}
      description="Short essays on backend craft, applied ML, and what I'm learning along the way. Updated whenever something is genuinely worth writing down."
    />

    <div className="grid md:grid-cols-3 gap-4">
      {notes.map((n, i) => {
        const Wrapper: React.ElementType = n.href ? "a" : "div";
        const wrapperProps = n.href
          ? { href: n.href, target: "_blank", rel: "noreferrer" }
          : {};
        return (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Wrapper
              {...wrapperProps}
              className="group block h-full glass rounded-3xl p-7 hover-lift relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-9 h-9 rounded-xl bg-foreground/5 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <PenLine className="w-3.5 h-3.5 text-foreground/70 group-hover:text-primary transition-colors" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                <span>{n.tag}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{n.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{n.readingTime}</span>
              </div>

              <h3 className="font-display text-2xl leading-[1.15] tracking-tight mb-3 group-hover:text-gradient transition-colors">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>

    <div className="mt-10 flex items-center justify-center">
      <p className="font-mono text-xs text-muted-foreground">
        Want to write something together? <a href="#contact" className="text-foreground hover:text-primary transition-colors">Get in touch →</a>
      </p>
    </div>
  </section>
);
