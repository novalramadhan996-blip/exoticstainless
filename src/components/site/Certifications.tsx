import { CERTIFICATIONS } from "@/lib/site-data";
import { ICONS } from "./icons";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sertifikasi"
          title="Kualitas yang Dapat Diverifikasi"
          description="Sistem produksi dan manajemen kami tersertifikasi independen dan diaudit secara berkelanjutan."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon];
            return (
              <Reveal key={cert.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-accent">
                    {Icon && <Icon className="h-8 w-8" />}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.subtitle}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
