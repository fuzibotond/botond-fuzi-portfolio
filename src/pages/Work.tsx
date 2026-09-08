import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Contact } from "@/components/portfolio/Contact";
import { Seo } from "@/components/Seo";
import { businessProjects } from "@/lib/projects";
import { breadcrumbSchema, itemListSchema, personSchema, webPageSchema } from "@/lib/seo";

const TITLE = "Selected Work — Business Websites I've Built | Botond Füzi";
const DESCRIPTION =
  "Real production websites Botond Füzi designed, built, deployed and maintains — for a garden service on Fyn, a produce wholesaler, and a car dealership. Visit them live or read the case studies.";

const Work = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/work"
        jsonLd={[
          personSchema(),
          webPageSchema({ path: "/work", title: TITLE, description: DESCRIPTION }),
          itemListSchema(businessProjects.map((p) => ({ name: p.name, path: `/work/${p.slug}` }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />

      <section className="container pt-36 md:pt-44 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Selected client work
          </div>
          <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight max-w-[18ch]">
            Production websites for <em className="italic text-gradient font-light">real businesses</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I build and manage production websites for real businesses — from initial development and
            responsive design through to deployment, domains and ongoing maintenance. Below are
            sites you can visit live. If you run a business, this is also my{" "}
            <Link
              to="/web-development"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              web development for businesses
            </Link>{" "}
            in practice.
          </p>
        </motion.div>
      </section>

      <SelectedWork
        eyebrow="Business websites"
        title={<>Live sites, <em className="italic text-gradient font-light">start to finish</em>.</>}
        description="Each was designed, built, deployed and is maintained by me. Open any case study for the problem, what I built and how it's run."
      />

      <Contact />
    </main>
  );
};

export default Work;
