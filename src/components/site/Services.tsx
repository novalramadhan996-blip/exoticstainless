import { motion } from "framer-motion";
import { ICONS } from "./icons";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: "Hammer",
    title: "Pembuatan Pagar Stainless",
    description: "Pagar stainless untuk rumah, ruko, dan area komersial dengan ukuran, pola, dan finishing yang dapat disesuaikan.",
  },
  {
    icon: "Frame",
    title: "Railing Tangga Stainless",
    description: "Railing tangga dengan detail sambungan yang rapi, kokoh, dan disesuaikan dengan bentuk tangga serta konsep bangunan.",
  },
  {
    icon: "Building2",
    title: "Pembuatan Balkon",
    description: "Railing dan perlengkapan balkon stainless untuk tampilan yang bersih sekaligus membantu menjaga keamanan area.",
  },
  {
    icon: "Layers",
    title: "Tangga & Plat Stainless",
    description: "Pengerjaan tangga, plat, dan komponen stainless sesuai ukuran lapangan dan kebutuhan konstruksi.",
  },
  {
    icon: "DoorOpen",
    title: "Pembuatan Pintu Stainless",
    description: "Pintu stainless untuk kebutuhan hunian, usaha, dan area kerja dengan desain yang menyesuaikan kondisi lokasi.",
  },
  {
    icon: "Zap",
    title: "Cutting & Pola Stainless",
    description: "Pemotongan dan pembuatan pola stainless untuk kebutuhan dekoratif maupun komponen fabrikasi.",
  },
  {
    icon: "Wrench",
    title: "Fabrikasi Custom",
    description: "Punya desain atau ukuran sendiri? Kami kerjakan berdasarkan kebutuhan, gambar, atau hasil pengukuran di lokasi.",
  },
  {
    icon: "PencilRuler",
    title: "Survey & Pengukuran",
    description: "Pengukuran di lokasi membantu memastikan ukuran produksi sesuai kondisi bangunan sebelum pekerjaan dimulai.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Pengerjaan Stainless Sesuai Kebutuhan"
          description="Mulai dari pagar dan railing hingga pekerjaan custom. Kami menyesuaikan pengerjaan dengan ukuran, desain, dan kondisi lokasi proyek."
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
