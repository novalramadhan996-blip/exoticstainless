import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Certifications } from "@/components/site/Certifications";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import factoryImg from "@/assets/factory.jpg";

const OG_IMAGE = absoluteUrl(factoryImg);
const TITLE = "Tentang Master Stainless | Fabrikasi Stainless Steel Bekasi";
const DESCRIPTION =
  "Kenali Master Stainless, penyedia fabrikasi stainless steel custom di Bekasi, Jawa Barat untuk kebutuhan hunian, komersial, industri, hospitality, dan fasilitas.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Pekerjaan dan fasilitas fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Solusi Fabrikasi Stainless Steel untuk Berbagai Kebutuhan"
        subtitle="Kami membantu mewujudkan kebutuhan stainless steel dari konsultasi dan pengukuran hingga proses fabrikasi dan pemasangan."
      />
      <About />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Certifications />
    </>
  );
}
