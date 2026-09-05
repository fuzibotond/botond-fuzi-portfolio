import { useState } from "react";

interface ProjectShotProps {
  src: string;
  alt: string;
  /** shown behind/instead of the image until a real screenshot exists */
  label: string;
  sublabel?: string;
  /** live-site host, e.g. "fynshavehjaelp.dk" — shown in the fallback's faux browser bar */
  host?: string;
  className?: string;
  /** below-the-fold previews should stay lazy; a hero case-study shot can be eager */
  eager?: boolean;
}

/**
 * Screenshot with a branded fallback. The <img> is transparent until it loads,
 * so the placeholder shows cleanly while a preview file is missing, and the real
 * screenshot appears automatically once it's added to /public/work — no code change.
 */
export const ProjectShot = ({ src, alt, label, sublabel, host, className = "", eager = false }: ProjectShotProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-surface/40 ${className}`}>
      {/* branded fallback: faux browser card */}
      <div
        aria-hidden={loaded && !failed}
        className="absolute inset-0 flex flex-col bg-gradient-to-br from-primary/15 via-surface/50 to-accent/10"
      >
        <div className="flex items-center gap-2 px-4 h-9 border-b border-border/50 bg-background/30">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          {host && (
            <span className="ml-3 truncate rounded-full bg-background/50 px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
              {host}
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-1 text-center px-4">
          <span className="font-display text-xl md:text-2xl text-foreground/85">{label}</span>
          {sublabel && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{sublabel}</span>}
        </div>
      </div>

      {!failed && (
        <img
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};
