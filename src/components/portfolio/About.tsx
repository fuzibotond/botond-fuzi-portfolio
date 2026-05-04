import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { SectionHeader } from "./SectionHeader";

export const About = () => (
  <section id="about" className="container py-32">
    <SectionHeader
      eyebrow="About"
      title={<>Engineering as a <em className="italic text-gradient font-light">product</em> discipline.</>}
    />

    <div className="grid md:grid-cols-12 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-5 relative"
      >
        <div className="relative rounded-3xl overflow-hidden glass aspect-[4/5]">
          <img
            src={portrait}
            alt="Portrait of Alex Rivera"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="font-display text-2xl">Alex Rivera</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">b. Buenos Aires · based in Brooklyn</div>
            </div>
            <div className="font-mono text-xs text-primary">2026</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground"
      >
        <p>
          I write software that has to work — under load, on flaky networks, at 3am during an
          incident. After a decade across infrastructure, payments and developer tooling, I've
          learned that the interesting problems sit in the seams: where systems meet humans,
          and where engineering decisions become product decisions.
        </p>
        <p>
          My work tends to look the same shape regardless of stack: <span className="text-foreground">find the constraint</span>,
          design around it, instrument honestly, ship the smallest thing that proves the next
          decision. I care about clarity in code reviews, calm in postmortems, and shipping on
          a Friday only when I'm certain.
        </p>
        <p>
          I'm currently exploring opportunities at the intersection of <span className="text-foreground">developer platforms,
          AI infrastructure, and crafted product surfaces</span>. Open to staff IC and
          engineering manager tracks at companies that take craft seriously.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-8">
          <div className="glass rounded-2xl p-5">
            <div className="font-display text-3xl text-gradient">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Years shipping production software</div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="font-display text-3xl text-gradient">4</div>
            <div className="text-sm text-muted-foreground mt-1">Engineering teams led to date</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
