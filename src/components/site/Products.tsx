import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, type Product } from "@/lib/product-catalog";
import { BrochureDownload } from "./BrochureDownload";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elevated">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={`${product.title} — hasil fabrikasi Master Stainless`}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground">{product.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          <Link
            to="/produk/$slug"
            params={{ slug: product.slug }}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            Lihat Detail
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export function Products({ limit }: { limit?: number }) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <section id="products" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produk Kami"
          title="Pagar, Railing, dan Solusi Stainless Steel Custom"
          description="Produk stainless steel Master Stainless untuk pagar, pintu, railing tangga, railing balkon, dan kebutuhan fabrikasi custom untuk hunian maupun bangunan komersial."
        />

        <motion.div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {limit && (
            <Button asChild variant="gold" size="lg">
              <Link to="/products">
                Lihat Semua Produk <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
          <BrochureDownload type="products" variant={limit ? "outline" : "gold"} />
        </div>
      </div>
    </section>
  );
}
