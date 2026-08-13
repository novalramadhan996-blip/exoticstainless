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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Stainless — Fabrikasi Stainless Steel Premium" },
      {
        name: "description",
        content:
          "Merekayasa solusi stainless steel yang dibangun untuk performa dan dirancang untuk presisi. Fabrikasi kustom, pemotongan laser, pengelasan, dan instalasi ke seluruh negeri.",
      },
      { property: "og:title", content: "Master Stainless — Fabrikasi Stainless Steel Premium" },
      {
        property: "og:description",
        content: "Merekayasa solusi stainless steel yang dibangun untuk performa dan dirancang untuk presisi. Fabrikasi kustom, pemotongan laser, pengelasan, dan instalasi ke seluruh negeri.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Fasilitas fabrikasi stainless steel Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
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
