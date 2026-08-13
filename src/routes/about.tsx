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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Master Stainless" },
      {
        name: "description",
        content:
          "Mengenal Master Stainless, penyedia solusi fabrikasi stainless steel untuk kebutuhan komersial, industri, hospitality, kesehatan, dan proyek custom.",
      },
      { property: "og:title", content: "Tentang Kami — Master Stainless" },
      {
        property: "og:description",
        content:
          "Solusi fabrikasi stainless steel dengan pengerjaan presisi, rapi, dan disesuaikan dengan kebutuhan proyek.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Fasilitas dan pekerjaan fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <WhyChooseUs />
      <Process />
      <Certifications />
    </>
  );
}
