import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
  .map(([, url]) => url)
  .filter(Boolean);

const PROJECTS = [
  {
    title: "Pagar & Gerbang Stainless Custom",
    category: "Pagar & Gerbang",
    description: "Pagar dan gerbang stainless custom dengan detail dekoratif, konstruksi kokoh, dan finishing rapi untuk hunian.",
  },
  {
    title: "Pagar Stainless Model Custom",
    category: "Pagar & Gerbang",
    description: "Pekerjaan pagar stainless dengan desain custom yang disesuaikan dengan tampilan fasad dan kebutuhan area rumah.",
  },
  {
    title: "Gerbang Stainless Minimalis",
    category: "Pagar & Gerbang",
    description: "Gerbang stainless dengan garis horizontal dan tampilan minimalis yang memberikan kesan modern pada bagian depan hunian.",
  },
];

export function Blog() {
  return (
    <section id="projects-latest" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Karya Kami"
          title="Proyek Terbaru"
          description="Lihat beberapa hasil pekerjaan Master Stainless yang dikerjakan secara custom untuk kebutuhan hunian, komersial, dan industri di Jabodetabek."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elevated"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[i]}
                    alt={`${project.title} — Master Stainless Jabodetabek`}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 768px) 384px, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <Link
                    to="/projects"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    Lihat Semua Proyek
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
