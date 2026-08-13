import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { Contact } from "@/components/site/Contact";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import project1Img from "@/assets/project-samples/project-1.webp";

const OG_IMAGE = absoluteUrl(project1Img);

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Produk — Master Stainless" },
      {
        name: "description",
        content:
          "Produk stainless steel custom Master Stainless: pagar, pintu, railing tangga, railing balkon, dan solusi fabrikasi untuk hunian serta bangunan komersial.",
      },
      { property: "og:title", content: "Produk — Master Stainless" },
      { property: "og:description", content: "Pagar, railing, pintu, dan solusi stainless steel custom yang dibuat sesuai kebutuhan proyek." },
      { property: "og:url", content: `${SITE_URL}/products` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Pagar stainless steel hasil fabrikasi Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produk Kami"
        title="Pagar, Railing, dan Stainless Steel Custom"
        subtitle="Dibuat berdasarkan ukuran, desain, dan kebutuhan proyek Anda."
      />
      <Products />
      <Industries />
      <Contact />
    </>
  );
}
