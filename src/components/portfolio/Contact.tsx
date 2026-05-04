import { motion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "Email", value: "botond.fuzi.dev@gmail.com", href: "mailto:botond.fuzi.dev@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/fuzibotond", href: "https://github.com/fuzibotond", icon: Github },
  { label: "LinkedIn", value: "in/botond-fuzi", href: "https://www.linkedin.com/in/botond-fuzi/", icon: Linkedin },
  { label: "Instagram", value: "@botond.fuzi", href: "https://www.instagram.com/botond.fuzi/", icon: Instagram },
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
          Have a problem worth solving?
          <br />
          <em className="italic text-gradient font-light">Let's talk about it.</em>
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground text-lg leading-relaxed">
          I read every message. Best for graduate / junior software engineering roles, thesis-related
          collaboration, or interesting side projects in Java, Spring Boot, Angular or applied ML.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="mailto:botond.fuzi.dev@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            botond.fuzi.dev@gmail.com
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="tel:+4571496675"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass font-medium hover:border-primary/40 transition-colors"
          >
            +45 71 49 66 75
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
      <div>© 2026 Botond Füzi · Built from scratch in Odense</div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Open to new roles · 2026
      </div>
    </footer>
  </section>
);
