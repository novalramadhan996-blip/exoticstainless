import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductCard } from "@/components/site/Products";
import { Reveal } from "@/components/site/motion-primitives";
import { PRODUCTS, type Product } from "@/lib/product-catalog";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/produk/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produk Tidak Ditemukan — Exotic Stainless" }, { name: "robots", content: "noindex, follow" }] };
    }
    const { product } = loaderData;
    const title = `${product.title} Stainless Steel Custom | Exotic Stainless`;
    const description = `${product.description} Dikerjakan secara custom untuk kebutuhan proyek di Jabodetabek.`;
    const url = `${SITE_URL}/produk/${params.slug}`;
    const image = absoluteUrl(product.image);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: `${product.title} stainless steel custom Exotic Stainless` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": `${url}#product`,
              name: product.title,
              description: product.intro,
              image: [image],
              url,
              sku: params.slug,
              category: "Fabrikasi Stainless Steel",
              brand: { "@type": "Brand", name: "Exotic Stainless" },
              manufacturer: { "@type": "Organization", name: "Exotic Stainless", url: SITE_URL },
              areaServed: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
              additionalProperty: product.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Produk", item: `${SITE_URL}/products` },
                { "@type": "ListItem", position: 3, name: product.title, item: url },
              ],
            },
          ],
        }),
      }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-40 text-center">
      <h1 className="text-3xl font-extrabold text-foreground">Produk tidak ditemukan</h1>
      <p className="mt-3 text-muted-foreground">Produk yang Anda cari mungkin sudah diganti namanya.</p>
      <Button asChild variant="gold" className="mt-8"><Link to="/products">Lihat Semua Produk</Link></Button>
    </div>
  );
}

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = PRODUCTS.find((p) => p.slug === slug)!;
  const related: Product[] = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Produk" title={product.title} subtitle={product.description} />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Produk
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={product.image}
                  alt={`${product.title} — produk stainless steel custom hasil fabrikasi Exotic Stainless di Jabodetabek`}
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="sr-only">{product.intro}</figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-lg font-medium leading-relaxed text-foreground">{product.intro}</p>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {product.body.map((p) => <p key={p}>{p}</p>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="gold" size="lg"><Link to="/contact">Minta Penawaran <ArrowRight className="h-4 w-4" /></Link></Button>
                  <Button asChild variant="outline" size="lg"><Link to="/projects">Lihat Proyek Terkait</Link></Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <h2 className="text-xl font-bold text-foreground">Keunggulan</h2>
                <ul className="mt-5 space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"><Check className="h-3 w-3" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-surface p-8 shadow-soft">
                <h2 className="text-xl font-bold text-foreground">Spesifikasi</h2>
                <dl className="mt-5 divide-y divide-border">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-semibold text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-extrabold text-foreground">Produk Lainnya</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
