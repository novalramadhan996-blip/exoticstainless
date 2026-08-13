import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { BLOG } from "@/lib/site-data";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-background py-20 sm:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Wawasan"
          title="Artikel Terbaru"
          description="Keahlian, tren industri, dan panduan praktis dari tim rekayasa kami."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elevated"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Ilustrasi artikel ${post.category.toLowerCase()}: ${post.title} — Master Stainless`}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 768px) 384px, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <Link
                    to="/artikel/$slug"
                    params={{ slug: post.slug }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    Baca Selengkapnya
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
