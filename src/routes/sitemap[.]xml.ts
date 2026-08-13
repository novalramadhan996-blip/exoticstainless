import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG, PRODUCTS, PROJECTS } from "@/lib/site-data";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const BASE_URL = SITE_URL;

interface SitemapImage {
  loc: string;
  title: string;
  caption?: string;
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: SitemapImage[];
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const productImages: SitemapImage[] = PRODUCTS.map((p) => ({
          loc: absoluteUrl(p.image),
          title: `${p.title} stainless steel`,
          caption: p.description,
        }));
        const projectImages: SitemapImage[] = PROJECTS.map((p) => ({
          loc: absoluteUrl(p.image),
          title: `${p.title} — ${p.category}`,
          caption: p.description,
        }));

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          {
            path: "/products",
            changefreq: "monthly",
            priority: "0.8",
            images: productImages,
          },
          {
            path: "/projects",
            changefreq: "monthly",
            priority: "0.8",
            images: projectImages,
          },
          {
            path: "/gallery",
            changefreq: "monthly",
            priority: "0.6",
            images: [...projectImages, ...productImages],
          },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...PRODUCTS.map((p) => ({
            path: `/produk/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            images: [
              { loc: absoluteUrl(p.image), title: `${p.title} stainless steel`, caption: p.description },
            ],
          })),
          ...BLOG.map((b) => ({
            path: `/artikel/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            images: [{ loc: absoluteUrl(b.image), title: b.title, caption: b.excerpt }],
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            ...(e.images ?? []).map((img) =>
              [
                `    <image:image>`,
                `      <image:loc>${esc(img.loc)}</image:loc>`,
                `      <image:title>${esc(img.title)}</image:title>`,
                img.caption ? `      <image:caption>${esc(img.caption)}</image:caption>` : null,
                `    </image:image>`,
              ]
                .filter(Boolean)
                .join("\n"),
            ),
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
