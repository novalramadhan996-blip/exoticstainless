import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/motion-primitives";
import { BLOG, type BlogPost } from "@/lib/site-data";
import { SITE_URL } from "@/lib/seo";

const SITE = SITE_URL;

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const post = BLOG.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return {
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      date: post.date,
      isoDate: post.isoDate,
      author: post.author,
      category: post.category,
    };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artikel Tidak Ditemukan — Exotic Stainless" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — Exotic Stainless`;
    const url = `${SITE}/artikel/${params.slug}`;
    const image = loaderData.image.startsWith("http")
      ? loaderData.image
      : `${SITE}${loaderData.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "article:section", content: loaderData.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.excerpt },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "@id": `${url}#article`,
                headline: loaderData.title,
                description: loaderData.excerpt,
                articleSection: loaderData.category,
                inLanguage: "id-ID",
                image: [image],
                url,
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                datePublished: loaderData.isoDate,
                dateModified: loaderData.isoDate,
                author: { "@type": "Organization", name: loaderData.author, url: SITE },
                publisher: {
                  "@type": "Organization",
                  name: "Exotic Stainless",
                  url: SITE,
                  logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Beranda", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Artikel", item: `${SITE}/#blog` },
                  { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticleDetail,
});

function ArticleNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-40 text-center">
      <h1 className="text-3xl font-extrabold text-foreground">Artikel tidak ditemukan</h1>
      <p className="mt-3 text-muted-foreground">Artikel yang Anda cari mungkin sudah dipindahkan.</p>
      <Button asChild variant="gold" className="mt-8">
        <Link to="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}

function ArticleDetail() {
  const { slug } = Route.useParams();
  const post = BLOG.find((b) => b.slug === slug)!;
  const others: BlogPost[] = BLOG.filter((b) => b.slug !== slug);

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} subtitle={post.excerpt} />

      <article className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/" hash="blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Artikel
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
          </div>

          <Reveal>
            <figure className="mt-8 overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={post.image}
                alt={`Gambar utama artikel ${post.category.toLowerCase()}: ${post.title} — Exotic Stainless`}
                width={1200}
                height={675}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(min-width: 768px) 768px, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">{post.excerpt}</figcaption>
            </figure>
          </Reveal>

          <div className="mt-12 space-y-10">
            {post.body.map((section, i) => (
              <Reveal key={section.heading ?? `intro-${i}`} delay={0.05}>
                <div>
                  {section.heading && <h2 className="text-2xl font-extrabold text-foreground">{section.heading}</h2>}
                  <div className={`space-y-4 text-base leading-relaxed text-muted-foreground ${section.heading ? "mt-4" : ""}`}>
                    {section.paragraphs.map((para) => <p key={para}>{para}</p>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">Butuh saran teknis untuk proyek Anda?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tim kami siap membantu memilih material dan desain yang tepat.</p>
            <Button asChild variant="gold" size="lg" className="mt-6"><Link to="/contact">Konsultasi Gratis <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-extrabold text-foreground">Artikel Lainnya</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((o) => (
                <Link key={o.slug} to="/artikel/$slug" params={{ slug: o.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elevated">
                  <img src={o.image} alt={`Pratinjau artikel ${o.category.toLowerCase()}: ${o.title}`} width={600} height={340} loading="lazy" decoding="async" sizes="(min-width: 640px) 360px, 100vw" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{o.category}</span>
                    <h3 className="mt-2 font-bold text-foreground">{o.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
