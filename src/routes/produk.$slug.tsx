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
      return {
        meta: [
          { title: "Produk Tidak Ditemukan — Master Stainless" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }

    const { product } = loaderData;
    const title = `${product.title} Stainless Steel Custom | Master Stainless`;
    const description = `${product.description} Dikerjakan secara custom untuk kebutuhan proyek di Bekasi dan Jawa Barat.`;
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
        { property: "og:image:alt", content: `${product.title} stainless steel custom Master Stainless` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
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
                "@type": "Product",
                "@id": `${url}#product`,
                name: product.title,
                description: product.intro,
                image: [image],
                url,
                sku: params.slug,
                category: "Fabrikasi Stainless Steel",
                brand: { "@type": "Brand", name: "Master Stainless" },
                manufacturer: { "@type": "Organization", name: "Master Stainless", url: SITE_URL },
                areaServed: ["Bekasi", "Jawa Barat"],
                additionalProperty: product.specs.map((s) => ({
                  "@type": "PropertyValue",
                  name: s.label,
                  value: s.value,
                })),
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
        },
      ],
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
                  alt={`${product.title} — produk stainless steel custom hasil fabrikasi Master Stainless di Bekasi`}
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
                  {product.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">Spesifikasi</h2>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="rounded-2xl bg-muted/50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{spec.label}</dt>
                  <dd className="mt-2 font-semibold text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">Produk lainnya</p>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground">Solusi Stainless Steel Lainnya</h2>
              </div>
              <Link to="/products" className="hidden items-center gap-2 text-sm font-semibold text-accent sm:flex">
                Lihat semua <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
