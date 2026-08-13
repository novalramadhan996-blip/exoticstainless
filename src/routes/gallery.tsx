import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/motion-primitives";
import { PRODUCTS, PROJECTS } from "@/lib/site-data";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const IMAGES = [
  ...PROJECTS.map((p) => ({
    src: p.image,
    title: p.title,
    alt: `Proyek ${p.category.toLowerCase()}: ${p.title} — fabrikasi stainless steel Master Stainless`,
  })),
  ...PRODUCTS.map((p) => ({
    src: p.image,
    title: p.title,
    alt: `${p.title} stainless steel hasil fabrikasi Master Stainless`,
  })),
];

const OG_IMAGE = absoluteUrl(IMAGES[0].src);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Master Stainless" },
      {
        name: "description",
        content: "Galeri visual fabrikasi stainless steel premium, produk, dan proyek yang telah selesai.",
      },
      { property: "og:title", content: "Galeri — Master Stainless" },
      { property: "og:description", content: "Lihat keahlian stainless steel kami secara detail." },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Galeri fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galeri Master Stainless",
          url: `${SITE_URL}/gallery`,
          inLanguage: "id-ID",
          image: IMAGES.slice(0, 12).map((img) => ({
            "@type": "ImageObject",
            contentUrl: absoluteUrl(img.src),
            name: img.title,
            description: img.alt,
          })),
        }),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Keahlian Kami Secara Detail"
        subtitle="Melihat lebih dekat produk dan proyek stainless steel yang kami hadirkan."
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {IMAGES.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <button
                  onClick={() => setActive(img.src)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={800}
                    decoding="async"
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-4 text-sm font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {img.title}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-primary/90 p-6 backdrop-blur"
          >
            <button
              aria-label="Tutup"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={active}
              alt="Pratinjau galeri"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-elevated"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
