import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { EVENTS, track } from "@/lib/analytics";

const paths = [
  {
    to: "/software-engineer",
    eyebrow: "For employers",
    icon: Code2,
    title: "Hire me as an engineer",
    body: "Reliable backend, full-stack and AI-enabled software in Java, Spring Boot and Angular.",
    cta: "See engineering work",
    event: EVENTS.hireEngineerCta,
  },
  {
    to: "/web-development",
    eyebrow: "For businesses",
    icon: Globe,
    title: "Build a website for your business",
    body: "Fast, modern websites and custom web apps for businesses in Odense, Fyn and across Denmark.",
    cta: "Explore web development",
    event: EVENTS.webDevCta,
  },
];

/** Two equal paths — hiring an engineer, or building for a business. */
export const TwoPaths = () => (
  <section id="work-with-me" className="container py-24">
    <div className="grid md:grid-cols-2 gap-5">
      {paths.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.to}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={p.to}
              onClick={() => track(p.event, { location: "home_paths" })}
              className="group h-full flex flex-col glass rounded-3xl p-8 md:p-10 hover-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-foreground/5 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{p.eyebrow}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                {p.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </section>
);
