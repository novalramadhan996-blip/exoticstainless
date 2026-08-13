import { CheckCircle2, Cog, Factory, Target, Timer, Users } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";
import factoryImg from "@/assets/factory.jpg";

const features = [
  { icon: CheckCircle2, label: "Material Bersertifikat" },
  { icon: Users, label: "Tim Profesional" },
  { icon: Cog, label: "Mesin Canggih" },
  { icon: Timer, label: "Produksi Cepat" },
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
                  src={factoryImg}
                  alt="Lantai pabrik fabrikasi stainless steel"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-gold px-6 py-5 shadow-gold sm:block">
                <p className="text-3xl font-extrabold text-primary">20+</p>
                <p className="text-sm font-medium text-primary/80">Tahun Keunggulan</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Tentang Master Stainless"
              title="Stainless Steel Presisi, Dirancang untuk Tahan Lama"
              description="Selama lebih dari dua dekade kami bermitra dengan merek terkemuka di sektor kesehatan, perhotelan, dan industri — memadukan keahlian tingkat tinggi dengan mesin canggih untuk menghadirkan solusi stainless steel yang sempurna."
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-accent">
                    <Target className="h-5 w-5" />
                    <h3 className="font-bold text-foreground">Misi Kami</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Merekayasa solusi stainless steel yang menjadi standar kualitas,
                    daya tahan, dan presisi di setiap industri yang kami layani.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-accent">
                    <Factory className="h-5 w-5" />
                    <h3 className="font-bold text-foreground">Visi Kami</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Menjadi produsen stainless steel paling tepercaya, diakui atas inovasi,
                    integritas, dan keahlian tanpa kompromi.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.label} delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
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
