import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Seo } from "@/components/Seo";
import { EVENTS, track } from "@/lib/analytics";
import { breadcrumbSchema, personSchema, webPageSchema } from "@/lib/seo";

const TITLE = "Software Engineer — Java, Spring Boot, Angular | Botond Füzi";
const DESCRIPTION =
  "Software engineer in Denmark with ~2 years building Java/Spring Boot backends, Angular full-stack apps and AI-enabled features. Available for engineering roles across Denmark and Europe.";

const capabilities = [
  {
    title: "Backend systems & REST APIs",
    body: "Production Java and Spring Boot services with JPA/Hibernate and SQL — plus experience with ASP.NET Core (C#). Comfortable owning modules end to end, from data model to endpoint.",
  },
  {
    title: "Full-stack web applications",
    body: "Angular, TypeScript and RxJS on the frontend, wired to my own APIs. I've shipped customer-facing features used by European clients on a two-week Scrum cadence.",
  },
  {
    title: "AI-enabled & data-driven features",
    body: "My MSc thesis built an AI-based pricing tool in Python (scikit-learn, pandas) with an explainable UI. I integrate model output and LLM APIs into real products, not demos.",
  },
  {
    title: "Cloud, containers & delivery",
    body: "Docker and Kubernetes, GitHub Actions CI, Kafka for messaging, and GCP from my Big Data and microservices coursework — I care about how software runs, not just how it builds.",
  },
  {
    title: "Testing & engineering quality",
    body: "JUnit and Mockito, integration tests to pin legacy behaviour before refactoring, code review and clear documentation. I drove critical modules to full unit-test coverage at Sonrisa.",
  },
  {
    title: "Legacy modernization",
    body: "Rewrote a high-security, high-availability government backend in Spring Boot — reusing trusted legacy services behind a clean boundary to preserve behaviour and improve efficiency.",
  },
];

const SoftwareEngineer = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/software-engineer"
        ogType="profile"
        jsonLd={[
          personSchema(),
          webPageSchema({ path: "/software-engineer", title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Software Engineer", path: "/software-engineer" },
          ]),
        ]}
      />

      <section className="container pt-36 md:pt-44 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            For employers &amp; recruiters
          </div>
          <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight max-w-[18ch]">
            Software Engineer for backend, full-stack &amp;{" "}
            <em className="italic text-gradient font-light">AI-enabled</em> products.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Botond Füzi</span>, a software engineer based in
            Odense, Denmark, with an <span className="text-foreground">MSc in Software Engineering
            from SDU</span> and around two years of professional experience. I build reliable
            backend and full-stack systems in <span className="text-foreground">Java, Spring Boot,
            Angular and Python</span>, and I'm open to engineering roles across Denmark and Europe.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact me
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="/Botond-Fuzi-CV.pdf"
              download
              onClick={() => track(EVENTS.cvDownload)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/botond-fuzi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/fuzibotond"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <Marquee />

      <section className="container py-24">
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Capabilities</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            What I can take on <em className="italic text-gradient font-light">day one</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default SoftwareEngineer;
