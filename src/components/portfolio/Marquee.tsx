const logos = [
  "Java", "Spring Boot", "Angular", "TypeScript", "Docker", "Kubernetes", "Kafka", "GCP", "PostgreSQL", "Python",
];

export const Marquee = () => (
  <section className="py-12 border-y border-border/50 overflow-hidden bg-surface/30">
    <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
      Daily-driver toolkit
    </p>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="marquee">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl px-10 text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
            {l}
          </span>
        ))}
      </div>
    </div>
  </section>
);
