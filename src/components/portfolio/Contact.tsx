import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { label: "Email", value: "hello@alexrivera.dev", href: "mailto:hello@alexrivera.dev", icon: Mail },
  { label: "GitHub", value: "github.com/alexrivera", href: "https://github.com", icon: Github },
  { label: "LinkedIn", value: "in/alexrivera", href: "https://linkedin.com", icon: Linkedin },
  { label: "X / Twitter", value: "@alexrivera", href: "https://x.com", icon: Twitter },
];

export const Contact = () => (
  <section id="contact" className="container py-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative glass-strong rounded-[2rem] p-10 md:p-20 overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1] max-w-4xl">
          Have a hard problem?
          <br />
          <em className="italic text-gradient font-light">Let's talk about it.</em>
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground text-lg leading-relaxed">
          I read every message. Best for senior IC roles, fractional engineering leadership, or
          a focused 2–6 week engagement on something genuinely difficult.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="mailto:hello@alexrivera.dev"
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            hello@alexrivera.dev
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass font-medium hover:border-primary/40 transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-5 hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                <div className="text-sm mt-1 truncate">{s.value}</div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>

    <footer className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
      <div>© 2026 Alex Rivera · Built from scratch in Brooklyn</div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for new work · Q3 2026
      </div>
    </footer>
  </section>
);
