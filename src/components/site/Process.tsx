import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

const process = [
  {
    title: "Hubungi Kami",
    description: "Sampaikan kebutuhan, jenis pekerjaan, ukuran, lokasi, dan gambaran proyek yang ingin dikerjakan.",
  },
  {
    title: "Survey & Pengukuran",
    description: "Untuk pekerjaan yang membutuhkan kondisi lapangan, kami menyesuaikan ukuran dan detail berdasarkan lokasi proyek.",
  },
  {
    title: "Proses Pengerjaan",
    description: "Setelah spesifikasi disepakati, pekerjaan masuk ke tahap persiapan material, fabrikasi, pengelasan, dan finishing.",
  },
  {
    title: "Pemasangan",
    description: "Produk atau pekerjaan yang membutuhkan instalasi diselesaikan di lokasi dan diperiksa kembali sebelum serah terima.",
  },
];

export function Process() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cara Pemesanan"
          title="Dari Konsultasi hingga Pemasangan"
          description="Proses kerja yang sederhana dan jelas agar kebutuhan proyek dapat dibahas dan dikerjakan dengan lebih terarah."
        />
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block" />
          <div className="space-y-8 lg:space-y-0">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div
                  className={`relative flex items-start gap-6 lg:w-1/2 lg:items-center ${
                    i % 2 === 0 ? "lg:ml-auto lg:flex-row lg:pl-12" : "lg:mr-auto lg:flex-row-reverse lg:pr-12 lg:text-right"
                  }`}
                >
                  <span
                    className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold text-lg font-extrabold text-primary-foreground shadow-gold ${
                      i % 2 === 0 ? "lg:-ml-18" : "lg:-mr-18"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
