import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site-data";
import { ICONS } from "./icons";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Yang Kami Lakukan"
          title="Layanan Stainless Steel Lengkap"
          description="Mitra layanan menyeluruh — dari konsep dan rekayasa hingga fabrikasi, instalasi, dan perawatan berkelanjutan."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-accent transition-colors group-hover:bg-gradient-gold group-hover:text-primary">
                    {Icon && <Icon className="h-7 w-7" />}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
