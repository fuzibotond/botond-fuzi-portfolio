import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect } from "react";

export const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) - 0.5);
      my.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden aurora">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div style={{ x: tx, y: ty }} className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <motion.div style={{ x: useTransform(sx, v => v * -15), y: useTransform(sy, v => v * -15) }} className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8 font-mono text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to software engineering roles · Backend · Full-stack · AI products
        </motion.div>

<h1 className="font-display text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.95] tracking-tight max-w-[15ch] pr-6 md:pr-10">  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="block"
  >
    Turning{" "}
    <em className="inline-block italic text-gradient font-light pr-2">
  complex
</em>
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="block"
  >
    problems into
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="block"
  >
    scalable{" "}
    <em className="inline-block italic text-gradient font-light pr-2">
  solutions
</em>.
  </motion.span>
</h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-end"
        >
          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
  I'm <span className="text-foreground">Botond Füzi</span>, a software engineer with an{" "}
  <span className="text-foreground">MSc in Software Engineering from SDU</span> and hands-on
  experience building backend and full-stack systems with{" "}
  <span className="text-foreground">Java, Spring Boot, Angular and Python</span>.
  I'm especially interested in <span className="text-foreground">AI-powered products, agents,
  automation and data-driven systems</span> — while still enjoying the craft of clean,
  reliable general-purpose programming.
</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="group inline-flex items-center justify-between gap-6 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View selected work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-muted-foreground"
        >
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Odense, DK · UTC+1</span>
          <span>~2 years of professional experience</span>
          <span>Previously: Sonrisa · CodeSpring · Webapix</span>
        </motion.div>
      </div>
    </section>
  );
};
