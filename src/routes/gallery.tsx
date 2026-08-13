import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/motion-primitives";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

import project1 from "@/assets/project-samples/project-1.webp";
import project2 from "@/assets/project-samples/project-2.webp";
import project3 from "@/assets/project-samples/project-3.webp";
import project4 from "@/assets/project-samples/project-4.webp";
import project5 from "@/assets/project-samples/project-5.webp";
import project6 from "@/assets/project-samples/project-6.webp";
import project7 from "@/assets/project-samples/project-7.webp";
import project8 from "@/assets/project-samples/project-8.webp";
import project9 from "@/assets/project-samples/project-9.webp";
import project10 from "@/assets/project-samples/project-10.webp";
import project11 from "@/assets/project-samples/project-11.webp";
import project12 from "@/assets/project-samples/project-12.webp";

const IMAGES = [
  { src: project1, title: "Pagar Stainless Steel" },
  { src: project2, title: "Railing Balkon Stainless" },
  { src: project3, title: "Railing Tangga Stainless" },
  { src: project4, title: "Railing Minimalis Stainless" },
  { src: project5, title: "Pintu Stainless Steel" },
  { src: project6, title: "Kanopi Stainless Steel" },
  { src: project7, title: "Pagar Stainless Custom" },
  { src: project8, title: "Railing Rumah" },
  { src: project9, title: "Tangga Stainless" },
  { src: project10, title: "Pagar dan Gerbang Stainless" },
  { src: project11, title: "Railing Balkon Custom" },
  { src: project12, title: "Fabrikasi Stainless Custom" },
].map((image) => ({
  ...image,
  alt: `${image.title} hasil fabrikasi Master Stainless`,
}));

const OG_IMAGE = absoluteUrl(IMAGES[0].src);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri Proyek — Master Stainless" },
      {
        name: "description",
        content:
          "Galeri proyek Master Stainless yang menampilkan hasil fabrikasi pagar, railing, tangga, pintu, kanopi, dan produk stainless steel custom.",
      },
      { property: "og:title", content: "Galeri Proyek — Master Stainless" },
      {
        property: "og:description",
        content:
          "Lihat hasil pekerjaan Master Stainless secara langsung melalui koleksi proyek stainless steel kami.",
      },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Galeri proyek stainless steel Master Stainless" },
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
          name: "Galeri Proyek Master Stainless",
          url: `${SITE_URL}/gallery`,
          inLanguage: "id-ID",
          image: IMAGES.map((img) => ({
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
        eyebrow="Galeri Proyek"
        title="Hasil Pekerjaan Master Stainless"
        subtitle="Koleksi hasil fabrikasi stainless steel kami — kualitas, presisi, dan ketahanan dalam setiap detail."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => setActive(img.src)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-muted shadow-soft"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading={i < 3 ? "eager" : "lazy"}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-4 pt-12 text-left text-sm font-semibold text-white">
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
              type="button"
              aria-label="Tutup"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={active}
              alt="Pratinjau galeri proyek Master Stainless"
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-elevated"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
