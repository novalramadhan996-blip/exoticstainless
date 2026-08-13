import { motion } from "framer-motion";
import { WHY_CHOOSE } from "@/lib/site-data";
import { ICONS } from "./icons";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 sm:py-28">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Mengapa Memilih Kami"
          title="Keunggulan Master Stainless"
          description="Delapan alasan organisasi terkemuka memercayakan proyek stainless steel paling menantang kepada kami."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col items-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center backdrop-blur"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-primary shadow-gold">
                    {Icon && <Icon className="h-8 w-8" />}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-primary-foreground">{item.title}</h3>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
