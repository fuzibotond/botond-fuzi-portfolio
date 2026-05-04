import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "University of Southern Denmark (SDU)",
    role: "MSc Software Engineering · w/ CompuSoft A/S",
    period: "2023 — 2026",
    location: "Odense, DK",
    outcomes: [
      "Focus on Big Data, GCP cloud, microservices and event-driven design",
      "Team projects across the full software-development lifecycle and reliability practices",
      "Thesis: Data-Driven Decision Support for Campsites and Resorts — AI-based pricing & revenue optimization (with CompuSoft A/S)",
    ],
  },
  {
    company: "Sonrisa",
    role: "Software Engineer",
    period: "2022 — 2024",
    location: "Hybrid · EU",
    outcomes: [
      "Delivered first-phase MVP within 5 months on a Spring Boot + Angular stack",
      "Drove critical modules to 100% unit-test coverage using JUnit and Mockito",
      "Built REST endpoints and Angular components used by European clients; shipped on a two-week Scrum cadence",
      "Rewrote a high-security, high-availability Hungarian government backend in Spring Boot, reusing legacy services to preserve functionality and improve efficiency",
    ],
  },
  {
  company: "WebApix",
  role: "Full-stack Intern",
  period: "2022",
  location: "Budapest, HU",
  outcomes: [
    "Developed PHP-based data collection and web-scraping solutions to reduce manual work",
    "Worked on multiple client projects using Laravel and Vue",
    "Improved internal tools with interactive UI components and lightweight animations",
  ],
},
  {
  company: "CodeSpring",
  role: "Backend Trainee",
  period: "2021 — 2022",
  location: "Transylvania, RO",
  outcomes: [
    "Completed a 2-week intensive training in Java covering OOP, Spring Boot, and Hibernate",
    "Attended additional .NET and C# training sessions across multiple occasions",
    "Built small practice applications to strengthen backend fundamentals and architecture understanding",
  ],
},
{
  company: "WebGurus",
  role: "Full-stack Intern",
  period: "2021",
  location: "Székelyudvarhely, RO",
  outcomes: [
    "Developed a time-tracking web application using Laravel and Vue in a team of 5",
    "Built backend APIs for time logging and user management",
    "Implemented frontend components with Vue and TypeScript, including OAuth 2.0 authentication",
  ],
},
{
  company: "Eötvös Loránd University (ELTE)",
  role: "Erasmus Exchange Student",
  period: "2022",
  location: "Budapest, Hungary",
  outcomes: [
    "Participated in Erasmus exchange program focusing on software engineering and computer science courses",
    "Collaborated in an international academic environment",
    "Expanded knowledge in modern development practices and cross-cultural teamwork",
  ],
},
  {
  company: "Sapientia Hungarian University of Transylvania",
  role: "BSc Information Technologies",
  period: "2019 — 2022",
  location: "Romania",
  outcomes: [
    "Studied core computer science subjects including OOP, data structures & algorithms, databases, AI, and distributed systems",
    "Built a strong foundation in software engineering and backend development principles",
    "Thesis: Developed a native time-management mobile application using Kotlin",
  ],
}
];

export const Experience = () => (
  <section id="experience" className="container py-32">
    <SectionHeader
      eyebrow="Experience"
      title={<>Professional and <em className="italic text-gradient font-light">academic</em> path.</>}
    />

    <div className="relative">
      <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      {roles.map((r, i) => (
        <motion.div
          key={r.company + r.period}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid md:grid-cols-4 gap-6 py-10 border-b border-border/40 last:border-0"
        >
          <div className="md:pl-8 relative">
            <span className="absolute left-[-5px] md:left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="font-mono text-xs text-muted-foreground">{r.period}</div>
            <div className="font-mono text-xs text-muted-foreground/60 mt-1">{r.location}</div>
          </div>

          <div className="md:col-span-3 md:pl-8">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-display text-2xl">{r.company}</h3>
              <span className="text-sm text-muted-foreground">— {r.role}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {r.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
