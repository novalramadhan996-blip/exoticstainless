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
import project1 from "@/assets/project-samples/project-1.webp";

const OG_IMAGE = absoluteUrl(project1);
const TITLE = "Fabrikasi Stainless Steel Jabodetabek | Exotic Stainless";
const DESCRIPTION =
  "Jasa fabrikasi stainless steel custom di Jabodetabek. Exotic Stainless mengerjakan railing, pagar, gerbang, pintu, peralatan stainless, rak, dan kebutuhan proyek rumah, komersial, hingga industri.";
const KEYWORDS =
  "fabrikasi stainless steel Jabodetabek, jasa stainless steel Jabodetabek, stainless steel custom, railing stainless steel, railing tangga, railing balkon, pagar stainless steel, gerbang stainless steel, pintu stainless steel, peralatan dapur stainless, rak stainless, Exotic Stainless";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Proyek fabrikasi stainless steel custom Exotic Stainless di Jabodetabek" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Exotic Stainless" },
      { property: "og:locale", content: "id_ID" },
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
