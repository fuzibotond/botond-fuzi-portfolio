import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
    >
      <nav
        className={`glass rounded-full px-2 py-2 flex items-center gap-1 transition-all duration-500 ${
          scrolled ? "shadow-elevated scale-100" : "scale-[1.02]"
        }`}
      >
        <a href="#top" className="font-display text-sm pl-4 pr-3 tracking-tight">
          bf<span className="text-primary">.</span>
        </a>
        <span className="hidden sm:block w-px h-5 bg-border" />
        <ul className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground/5 border border-foreground/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 px-4 py-1.5 text-xs font-medium rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
};
