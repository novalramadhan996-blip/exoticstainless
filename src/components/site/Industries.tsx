import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/site-data";
import { ICONS } from "./icons";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industri yang Kami Layani"
          title="Dipercaya di Setiap Sektor"
          description="Solusi stainless steel yang disesuaikan untuk kebutuhan unik setiap industri."
        />
        <div className="mt-14 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-shadow hover:shadow-elevated"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-gradient-gold group-hover:text-primary">
                    {Icon && <Icon className="h-7 w-7" />}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
