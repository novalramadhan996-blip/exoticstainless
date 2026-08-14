import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import factoryImg from "@/assets/factory.jpg";

const OG_IMAGE = absoluteUrl(factoryImg);
const TITLE = "Kontak Master Stainless | Minta Penawaran Fabrikasi";
const DESCRIPTION =
  "Hubungi Master Stainless untuk konsultasi dan penawaran fabrikasi stainless steel custom di Bekasi dan Jawa Barat, termasuk pagar, railing, pintu, dan kebutuhan proyek.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Workshop fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
        title="Konsultasikan Kebutuhan Stainless Steel Anda"
        subtitle="Ceritakan ukuran, desain, fungsi, atau kondisi lokasi proyek. Tim kami siap membantu menentukan solusi fabrikasi yang sesuai."
      />
      <Contact />
      <FAQ />
    </>
  );
}
