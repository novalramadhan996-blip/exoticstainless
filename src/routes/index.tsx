import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { Industries } from "@/components/site/Industries";
import { Certifications } from "@/components/site/Certifications";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import heroImg from "@/assets/hero.jpg";

const OG_IMAGE = absoluteUrl(heroImg);
const TITLE = "Master Stainless | Fabrikasi Stainless Steel Bekasi";
const DESCRIPTION =
  "Jasa fabrikasi stainless steel custom di Bekasi dan Jawa Barat untuk pagar, railing, pintu, peralatan, dan kebutuhan proyek komersial maupun industri.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Fabrikasi stainless steel Master Stainless" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products limit={6} />
      <WhyChooseUs />
      <Process />
      <Stats />
      <Projects />
      <Industries />
      <Certifications />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
