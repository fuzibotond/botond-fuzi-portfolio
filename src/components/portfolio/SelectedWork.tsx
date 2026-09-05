import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { businessProjects } from "@/lib/projects";
import { ProjectShot } from "@/components/ProjectShot";
import { EVENTS, track } from "@/lib/analytics";

interface SelectedWorkProps {
  /** heading eyebrow */
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

/**
 * Reusable "Selected client work" grid — real production websites Botond built
 * and maintains. Used on the homepage and the /web-development page.
 */
export const SelectedWork = ({
  eyebrow = "Selected client work",
  title = (
    <>
      Websites I've <em className="italic text-gradient font-light">built and maintain</em>.
    </>
  ),
  description = "Real production websites for real businesses. Each one I designed, built, deployed and continue to manage — visit them live, or read the short case study.",
  className = "",
}: SelectedWorkProps) => (
  <section id="selected-work" className={`container py-24 ${className}`}>
    <div className="mb-14 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">{title}</h2>
      {description && <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
    </div>

    <div className="grid md:grid-cols-3 gap-5">
      {businessProjects.map((p, i) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group glass rounded-3xl p-4 hover-lift flex flex-col"
        >
          <Link to={`/work/${p.slug}`} className="block" aria-label={`${p.name} case study`}>
            <ProjectShot src={p.image} alt={p.imageAlt} label={p.name} sublabel={p.category} host={new URL(p.url).host} />
          </Link>
          <div className="p-3 flex flex-col flex-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{p.tagline}</div>
            <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.card}</p>
            <div className="mt-4 flex items-center justify-between">
              <Link
                to={`/work/${p.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Case study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track(EVENTS.projectView, { project: p.slug, target: "live" })}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Live site <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
