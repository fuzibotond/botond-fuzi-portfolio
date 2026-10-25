import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { TwoPaths } from "@/components/portfolio/TwoPaths";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Seo } from "@/components/Seo";
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
      <TwoPaths />
      <SelectedWork />
      <Projects />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
