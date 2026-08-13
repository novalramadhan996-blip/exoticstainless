import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { Contact } from "@/components/site/Contact";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import kitchenImg from "@/assets/product-kitchen.jpg";

const OG_IMAGE = absoluteUrl(kitchenImg);

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Produk — Master Stainless" },
      {
        name: "description",
        content:
          "Produk stainless steel premium: peralatan dapur, rumah sakit, dan laboratorium, penyimpanan industri, pegangan tangan, meja kerja, dan fabrikasi kustom.",
      },
      { property: "og:title", content: "Produk — Master Stainless" },
      { property: "og:description", content: "Produk stainless steel yang direkayasa untuk setiap lingkungan." },
      { property: "og:url", content: `${SITE_URL}/products` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Peralatan dapur stainless steel food grade Master Stainless" },
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
        title="Produk Stainless Steel"
        subtitle="Dirancang dan diproduksi untuk memenuhi tuntutan terberat di setiap industri."
      />
      <Products />
      <Industries />
      <Contact />
    </>
  );
}
