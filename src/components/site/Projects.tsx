import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BrochureDownload } from "./BrochureDownload";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

const projectImages = Object.entries(
  import.meta.glob("../../assets/project-samples/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>,
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, url]) => url);

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

// Judul dan kategori disesuaikan dengan objek yang terlihat pada foto proyek.
const PROJECTS: Project[] = [
  {
    title: "Pagar & Gerbang Stainless",
    category: "Pagar & Gerbang",
    description: "Pekerjaan pagar dan gerbang stainless custom untuk tampilan rumah yang rapi, kokoh, dan tahan lama.",
    image: projectImages[0],
  },
  {
    title: "Railing Tangga Stainless",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga indoor dengan konstruksi vertikal yang sederhana dan kokoh.",
    image: projectImages[1],
  },
  {
    title: "Fabrikasi & Pengelasan Stainless",
    category: "Fabrikasi Stainless",
    description: "Proses fabrikasi dan pengelasan stainless steel yang dikerjakan secara presisi sesuai kebutuhan proyek.",
    image: projectImages[2],
  },
  {
    title: "Railing Tangga Indoor",
    category: "Railing Tangga",
    description: "Railing tangga stainless dengan desain minimalis dan garis vertikal yang memberikan tampilan bersih pada interior.",
    image: projectImages[3],
  },
  {
    title: "Pagar Stainless Custom",
    category: "Pagar & Gerbang",
    description: "Pagar stainless custom dengan panel dan detail dekoratif yang dibuat sesuai ukuran dan kebutuhan hunian.",
    image: projectImages[4],
  },
  {
    title: "Railing Tangga Minimalis",
    category: "Railing Tangga",
    description: "Railing tangga stainless dengan desain sederhana, proporsional, dan mudah dipadukan dengan interior modern.",
    image: projectImages[5],
  },
  {
    title: "Gerbang Stainless Custom",
    category: "Pagar & Gerbang",
    description: "Gerbang stainless dengan kombinasi bidang dan ornamen yang dikerjakan secara custom untuk hunian.",
    image: projectImages[6],
  },
  {
    title: "Railing Tangga Stainless",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga dengan susunan vertikal yang rapi dan konstruksi yang kokoh.",
    image: projectImages[7],
  },
  {
    title: "Pagar Stainless Modern",
    category: "Pagar & Gerbang",
    description: "Pagar stainless dengan kombinasi garis horizontal dan detail vertikal untuk tampilan fasad yang modern.",
    image: projectImages[8],
  },
  {
    title: "Railing Tangga Custom",
    category: "Railing Tangga",
    description: "Railing tangga stainless custom dengan konstruksi kokoh dan finishing rapi untuk area hunian.",
    image: projectImages[9],
  },
  {
    title: "Railing Stainless Indoor",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga dan bordes dengan garis vertikal yang bersih dan presisi.",
    image: projectImages[10],
  },
  {
    title: "Railing Tangga Stainless Custom",
    category: "Railing Tangga",
    description: "Pekerjaan railing tangga stainless custom dengan desain minimalis yang menyesuaikan kondisi bangunan.",
    image: projectImages[11],
  },
].filter((project) => Boolean(project.image));

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Karya Kami"
          title="Proyek Unggulan"
          description="Lihat hasil pekerjaan Master Stainless yang dikerjakan secara custom, mulai dari pagar dan gerbang hingga railing tangga serta fabrikasi stainless di Jabodetabek."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={`${project.title}-${i}`} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setActive(project)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={project.image}
                  alt={`${project.title} — Master Stainless Jabodetabek`}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-left text-xl font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BrochureDownload type="projects" />
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl overflow-hidden rounded-2xl p-0">
          <AnimatePresence>
            {active && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <img
                  src={active.image}
                  alt={`${active.title} — Master Stainless Jabodetabek`}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {active.category}
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-foreground">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
