import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench, Brain, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { icon: Layers, title: "Backend", note: "What I reach for first", items: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate", "ASP.NET Core (C#)"] },
  { icon: Code2, title: "Frontend", note: "Product surfaces", items: ["Angular", "TypeScript", "HTML / CSS", "Vue (past projects)"] },
  { icon: Database, title: "Data & storage", note: "Persistence and analytics", items: ["MySQL", "MSSQL", "MongoDB", "pandas / dask", "Dash · AnyChart"] },
  { icon: Cloud, title: "DevOps & infra", note: "Shipping and running it", items: ["Docker", "Kubernetes", "GitHub Actions", "Kafka", "GCP"] },
  { icon: Brain, title: "AI & ML", note: "Pragmatic, applied", items: ["scikit-learn", "OpenAI API", "Hugging Face", "Cursor / Claude / ChatGPT"] },
  { icon: Wrench, title: "Practice", note: "How I work", items: ["JUnit · Mockito · Postman", "Agile / Scrum", "Code review & ownership", "Clear documentation", "Continuous learning"] },
];

export const Stack = () => (
  <section id="stack" className="container py-32">
    <SectionHeader
      eyebrow="Stack & craft"
      title={<>Tools I reach for, <em className="italic text-gradient font-light">in context</em>.</>}
      description="A working stack, not a wishlist. Listed by domain, with the practices I bring to each."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {groups.map((g, i) => {
        const Icon = g.icon;
        return (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group glass rounded-2xl p-6 hover-lift relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{g.note}</span>
            </div>

            <h3 className="font-display text-2xl mb-4">{g.title}</h3>

            <ul className="space-y-1.5">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  </section>
);
