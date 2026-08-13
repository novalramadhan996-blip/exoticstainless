import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import factoryImg from "@/assets/factory.jpg";

const OG_IMAGE = absoluteUrl(factoryImg);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Penawaran — Master Stainless" },
      {
        name: "description",
        content:
          "Minta penawaran atau hubungi Master Stainless. Insinyur kami akan menyiapkan proposal stainless steel yang disesuaikan dalam 24 jam.",
      },
      { property: "og:title", content: "Kontak & Penawaran — Master Stainless" },
      { property: "og:description", content: "Ceritakan proyek stainless steel Anda." },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Workshop fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Mari Bangun Sesuatu yang Luar Biasa"
        subtitle="Minta penawaran dan tim kami akan merespons dalam 24 jam."
      />
      <Contact />
      <FAQ />
    </>
  );
}
