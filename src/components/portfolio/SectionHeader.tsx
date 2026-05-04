import { motion } from "framer-motion";

interface Props { eyebrow: string; title: React.ReactNode; description?: string; }

export const SectionHeader = ({ eyebrow, title, description }: Props) => (
  <div className="mb-16 max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 mb-6"
    >
      <span className="h-px w-8 bg-primary" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
);
