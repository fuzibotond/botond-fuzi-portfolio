import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { SectionHeader } from "./SectionHeader";

export const About = () => (
  <section id="about" className="container py-32">
    <SectionHeader
      eyebrow="About"
      title={<>Engineering as a <em className="italic text-gradient font-light">craft</em>, learned in public.</>}
    />

    <div className="grid md:grid-cols-12 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-5 relative"
      >
        <div className="relative rounded-3xl overflow-hidden glass aspect-[4/5]">
          <img
            src={portrait}
            alt="Portrait of Botond Füzi"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="font-display text-2xl">Botond Füzi</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">Transylvania → Odense, DK</div>
            </div>
            <div className="font-mono text-xs text-primary">2026</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground"
      >
        <p>
          Software engineer with around <span className="text-foreground">two years of professional
          experience</span> building Java/Spring Boot backends and Angular frontends — most recently at
          Sonrisa, shipping client features and helping rewrite a high-availability backend.
        </p>
        <p>
          I hold an <span className="text-foreground">MSc in Software Engineering from SDU</span>, with a
          thesis on AI-based pricing for campsites and resorts. I care about{" "}
          <span className="text-foreground">clean code, honest tests, and learning in public</span>.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-8">
          <div className="glass rounded-2xl p-5">
            <div className="font-display text-3xl text-gradient">~2</div>
            <div className="text-sm text-muted-foreground mt-1">Years shipping production software</div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="font-display text-3xl text-gradient">MSc</div>
            <div className="text-sm text-muted-foreground mt-1">Software Engineering · SDU (2026)</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
