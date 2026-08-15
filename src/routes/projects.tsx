import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { PROJECTS } from "@/lib/site-data";

const OG_IMAGE = absoluteUrl(PROJECTS[0].image);
const TITLE = "Proyek — Exotic Stainless";
const DESCRIPTION =
  "Jelajahi portofolio proyek stainless steel Exotic Stainless untuk rumah, komersial, industri, hospitality, dan berbagai kebutuhan fasilitas di Jabodetabek.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: `Proyek stainless steel ${PROJECTS[0].title} oleh Exotic Stainless` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Karya Kami"
        title="Proyek Unggulan"
        subtitle="Portofolio solusi stainless steel yang dikerjakan untuk berbagai kebutuhan klien."
      />
      <Projects />
      <Testimonials />
    </>
  );
}
