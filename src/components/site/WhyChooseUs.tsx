import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Ruler, Users } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    title: "Pelayanan yang Jelas",
    description: "Kebutuhan proyek dibahas sejak awal agar spesifikasi, ukuran, material, dan hasil akhir lebih terarah.",
    icon: CheckCircle2,
  },
  {
    title: "Teknisi Berpengalaman",
    description: "Pengerjaan ditangani dengan memperhatikan teknik fabrikasi, kekuatan konstruksi, dan kerapian detail.",
    icon: Users,
  },
  {
    title: "Pengerjaan Tepat",
    description: "Setiap pekerjaan mengikuti ukuran dan kebutuhan lapangan sehingga hasilnya tidak sekadar terlihat baik, tetapi juga berfungsi dengan baik.",
    icon: Ruler,
  },
  {
    title: "Proses Terukur",
    description: "Alur pekerjaan dibuat bertahap dari konsultasi, pengukuran, produksi, quality check, hingga pemasangan.",
    icon: Clock3,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 sm:py-28">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Mengapa Memilih Kami"
          title="Partner Fabrikasi untuk Kebutuhan Stainless Steel"
          description="Kami berusaha memberikan proses kerja yang jelas, pengerjaan yang rapi, dan solusi yang menyesuaikan kebutuhan setiap proyek."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col items-center rounded-2xl border border-overlay-foreground/10 bg-overlay-foreground/5 p-6 text-center backdrop-blur"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground shadow-gold">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-overlay-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-overlay-foreground/75">{item.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
