import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Gauge,
  LayoutTemplate,
  Plug,
  RefreshCw,
  Rocket,
  Settings,
} from "lucide-react";
import { Contact } from "@/components/portfolio/Contact";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Seo } from "@/components/Seo";
import { EVENTS, track } from "@/lib/analytics";
import {
  breadcrumbSchema,
  personSchema,
  webDevServiceSchema,
  webPageSchema,
} from "@/lib/seo";

const TITLE = "Web Development in Odense & Fyn | Botond Füzi";
const DESCRIPTION =
  "Modern, fast, responsive websites and custom web applications for small and medium-sized businesses in Odense, Fyn and across Denmark — built and maintained by a professional software engineer.";

const services = [
  {
    icon: LayoutTemplate,
    title: "Business websites",
    body: "A clear, fast website that works on every phone and is easy to update.",
  },
  {
    icon: Settings,
    title: "Custom web applications",
    body: "Booking flows, dashboards or admin tools built around how you actually work.",
  },
  {
    icon: RefreshCw,
    title: "Website redesign",
    body: "Rebuild an old or slow site on a modern, maintainable foundation.",
  },
  {
    icon: Plug,
    title: "Integrations",
    body: "Connect your site to forms, email, payments, calendars or other APIs.",
  },
  {
    icon: Gauge,
    title: "Performance improvements",
    body: "Make an existing site noticeably faster and more reliable.",
  },
  {
    icon: Rocket,
    title: "Deployment & hosting setup",
    body: "I handle domains, hosting and deployment so your site is live and secure.",
  },
];

const steps = [
  { n: "01", title: "Talk", body: "We discuss your goals and what the site needs to do. No jargon, no obligation." },
  { n: "02", title: "Plan", body: "A clear proposal: what I'll build, how long it takes, and what it costs." },
  { n: "03", title: "Build", body: "I build in the open and share progress early, so you can shape it." },
  { n: "04", title: "Launch", body: "We go live properly — domain, hosting, analytics and the finishing details." },
  { n: "05", title: "Improve", body: "Optional ongoing improvements as your business grows." },
];

const WebDevelopment = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/web-development"
        jsonLd={[
          personSchema(),
          webPageSchema({ path: "/web-development", title: TITLE, description: DESCRIPTION }),
          webDevServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Web Development", path: "/web-development" },
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
            Web development · Odense &amp; Fyn
          </div>
          <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight max-w-[16ch]">
            Websites &amp; web apps for businesses in{" "}
            <em className="italic text-gradient font-light">Odense &amp; Fyn</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Botond Füzi</span>, a software engineer in Odense. I
            build fast, modern websites and custom web apps for businesses across Denmark — and I
            maintain them too. You deal directly with the person building it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={() => track(EVENTS.webDevCta, { location: "webdev_hero" })}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Tell me about your project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <Link
              to="/software-engineer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:border-primary/40 transition-colors"
            >
              Hiring an engineer instead?
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Who it's for */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6">Who this is for</h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-muted-foreground">
            {[
              "Local businesses in Odense and on Fyn that need a proper website",
              "Businesses with an outdated or slow site that needs rebuilding",
              "Shops and services that want online booking, forms or a small admin tool",
              "Anyone in Denmark who wants a reliable developer, not a template factory",
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <span className="text-primary mt-1.5">→</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="container py-16">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">What I can build</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Practical web work, done <em className="italic text-gradient font-light">properly</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-foreground/70" />
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="container py-16">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">How it works</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            A simple, <em className="italic text-gradient font-light">honest</em> process.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-2xl text-gradient mb-2">{s.n}</div>
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected business websites — real proof */}
      <SelectedWork
        eyebrow="Selected business websites"
        title={<>Real sites, <em className="italic text-gradient font-light">already live</em>.</>}
        description="Websites I built and maintain for real businesses. Visit them, or read the short case study for what I built and how it's run."
      />

      {/* Why custom + proof */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6">
            Why work with an engineer
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A template gets you online, but rarely fits how your business runs. Because I build
            software professionally, your site is fast, secure and maintainable — ready to grow with
            bookings, integrations or an admin area when you need them.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            See the production software I build on my{" "}
            <Link to="/software-engineer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
              engineering page
            </Link>
            . Based in Odense, available across Denmark and on Fyn.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default WebDevelopment;
