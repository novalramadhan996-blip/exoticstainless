import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";

import logoMark from "@/assets/master-stainless-mark.png";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-data";

type FooterLink = {
  label: string;
  to: string;
  params?: { slug: string };
  hash?: string;
};

const companyLinks: FooterLink[] = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/about" },
  { label: "Produk", to: "/products" },
  { label: "Layanan", to: "/", hash: "services" },
  { label: "Galeri", to: "/gallery" },
  { label: "Kontak", to: "/contact" },
];

const productLinks: FooterLink[] = [
  { label: "Peralatan Dapur", to: "/produk/$slug", params: { slug: "peralatan-dapur" } },
  { label: "Peralatan Rumah Sakit", to: "/produk/$slug", params: { slug: "peralatan-rumah-sakit" } },
  { label: "Peralatan Laboratorium", to: "/produk/$slug", params: { slug: "peralatan-laboratorium" } },
  { label: "Pengolahan Makanan", to: "/produk/$slug", params: { slug: "peralatan-pengolahan-makanan" } },
  { label: "Penyimpanan Industri", to: "/produk/$slug", params: { slug: "penyimpanan-industri" } },
  { label: "Railing & Balustrade", to: "/produk/$slug", params: { slug: "railing-balustrade" } },
];

const serviceLinks: FooterLink[] = [
  { label: "Pagar Stainless", to: "/", hash: "services" },
  { label: "Railing Tangga", to: "/", hash: "services" },
  { label: "Balkon Stainless", to: "/", hash: "services" },
  { label: "Pintu Stainless", to: "/", hash: "services" },
  { label: "Cutting & Pola", to: "/", hash: "services" },
  { label: "Fabrikasi Custom", to: "/", hash: "services" },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              {...(link.params ? { params: link.params } : {})}
              {...(link.hash ? { hash: link.hash } : {})}
              className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}`;
  const mapsUrl = COMPANY.mapsUrl;

  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr_1fr_1.45fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label={COMPANY.name}
            >
              <img
                src={logoMark}
                alt={`Logo ${COMPANY.name}`}
                className="h-14 w-14 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xl font-extrabold tracking-tight">
                Master<span className="text-accent"> Stainless</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              Melayani kebutuhan fabrikasi stainless steel custom untuk pagar,
              railing, pintu, balkon, dan berbagai kebutuhan proyek sesuai
              ukuran serta kondisi lokasi.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="sm">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Konsultasi WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Minta Penawaran</Link>
              </Button>
            </div>
          </div>

          <FooterColumn title="Perusahaan" links={companyLinks} />
          <FooterColumn title="Produk" links={productLinks} />

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Hubungi Kami
            </h4>

            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/60">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s|-/g, "")}`}
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs text-primary-foreground/40">Telepon</span>
                    {COMPANY.phone}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs text-primary-foreground/40">Email</span>
                    {COMPANY.email}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs text-primary-foreground/40">Workshop / Office</span>
                    {COMPANY.office}
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <span className="block text-xs text-primary-foreground/40">Jam Operasional</span>
                  {COMPANY.hours}
                </span>
              </li>
            </ul>

            <div className="mt-6 border-t border-primary-foreground/10 pt-5">
              <FooterColumn title="Layanan" links={serviceLinks} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Semua hak dilindungi.
          </p>
          <p>Fabrikasi Stainless Steel · Bekasi, Jawa Barat</p>
        </div>
      </div>
    </footer>
  );
}
