import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PROJECTS } from "@/lib/site-data";
import { BrochureDownload } from "./BrochureDownload";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

type Project = (typeof PROJECTS)[number];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Karya Kami"
          title="Proyek Unggulan"
          description="Pilihan proyek stainless steel yang kami kerjakan untuk klien ternama di berbagai industri."
        />
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setActive(project)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {active.category}
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-foreground">{active.title}</h3>
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
