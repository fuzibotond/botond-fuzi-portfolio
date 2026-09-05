import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Seo } from "@/components/Seo";
import { EVENTS, track } from "@/lib/analytics";
import { personSchema, webPageSchema, websiteSchema } from "@/lib/seo";

const TITLE = "Botond Füzi | Software Engineer in Denmark";
const DESCRIPTION =
  "Botond Füzi is a software engineer in Odense, Denmark, building reliable backend, full-stack and AI-enabled software with Java, Spring Boot and Angular — and modern websites for businesses on Fyn.";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/"
        ogType="profile"
        jsonLd={[
          personSchema(),
          websiteSchema(),
          webPageSchema({ path: "/", title: TITLE, description: DESCRIPTION }),
        ]}
      />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Stack />
      <Experience />

      {/* Bridge to the small-business web-development funnel */}
      <section className="container pb-8">
        <Link
          to="/web-development"
          onClick={() => track(EVENTS.webDevCta, { location: "home_teaser" })}
          className="group block glass rounded-3xl p-8 md:p-10 hover-lift"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
                For businesses
              </div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Need a website for your business in Odense or Fyn?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beyond product engineering, I build modern, fast and responsive websites and web
                applications for small and medium-sized businesses across Denmark — from a first
                website to a redesign, a simple admin system, or an integration.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Explore web development
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <Contact />
    </main>
  );
};

export default Index;
