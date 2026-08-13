import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { PROJECTS } from "@/lib/site-data";

const OG_IMAGE = absoluteUrl(PROJECTS[0].image);

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Proyek — Master Stainless" },
      {
        name: "description",
        content:
          "Jelajahi proyek stainless steel yang kami kerjakan untuk hotel, rumah sakit, restoran, pabrik, dan gudang di berbagai industri.",
      },
      { property: "og:title", content: "Proyek — Master Stainless" },
      { property: "og:description", content: "Proyek stainless steel ternama yang dikerjakan dengan presisi." },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: `Proyek stainless steel ${PROJECTS[0].title} oleh Master Stainless` },
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
        subtitle="Portofolio solusi stainless steel yang dikerjakan untuk klien ternama."
      />
      <Projects />
      <Testimonials />
    </>
  );
}
