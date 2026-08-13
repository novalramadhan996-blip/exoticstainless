import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Certifications } from "@/components/site/Certifications";
import { Process } from "@/components/site/Process";
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
          "Lebih dari dua dekade keahlian stainless steel. Pelajari misi, visi, tim, dan standar produksi bersertifikat Master Stainless.",
      },
      { property: "og:title", content: "Tentang Kami — Master Stainless" },
      { property: "og:description", content: "Stainless steel presisi, dirancang untuk tahan lama." },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Lantai pabrik fabrikasi stainless steel Master Stainless" },
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
        eyebrow="Tentang Master Stainless"
        title="Dua Dekade Keunggulan Stainless Steel"
        subtitle="Mitra manufaktur tepercaya yang memadukan keahlian tingkat tinggi dengan mesin canggih."
      />
      <About />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Certifications />
    </>
  );
}
