import { CheckCircle2, Cog, Factory, Target, Timer, Users } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";
import project9 from "@/assets/project-samples/project-9.webp";

const features = [
  { icon: CheckCircle2, label: "Pengerjaan Rapi" },
  { icon: Users, label: "Tim Berpengalaman" },
  { icon: Cog, label: "Pengerjaan Custom" },
  { icon: Timer, label: "Proses Terukur" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={project9}
                  alt="Hasil pekerjaan railing stainless steel Master Stainless"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-gold px-6 py-5 shadow-gold sm:block">
                <p className="text-3xl font-extrabold text-primary-foreground">Custom</p>
                <p className="text-sm font-medium text-primary-foreground/80">Sesuai Kebutuhan Proyek</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Tentang Master Stainless"
              title="Fabrikasi Stainless Steel Sesuai Kebutuhan"
              description="Master Stainless melayani kebutuhan fabrikasi stainless steel di Jabodetabek, mulai dari pengukuran, pembahasan desain, fabrikasi, finishing, hingga pemasangan. Setiap pekerjaan disesuaikan dengan ukuran dan kondisi aktual di lapangan."
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-accent">
                    <Target className="h-5 w-5" />
                    <h3 className="font-bold text-foreground">Fokus Kami</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Memberikan hasil fabrikasi yang fungsional, kuat, rapi, dan sesuai dengan kebutuhan setiap proyek.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-accent">
                    <Factory className="h-5 w-5" />
                    <h3 className="font-bold text-foreground">Pengerjaan Terintegrasi</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Kebutuhan proyek dapat dibahas dari konsultasi, pengukuran, desain, fabrikasi, finishing, hingga pemasangan.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.label} delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
