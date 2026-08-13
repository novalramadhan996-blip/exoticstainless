import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

import logoMark from "@/assets/master-stainless-mark.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY } from "@/lib/site-data";

type FooterLink = {
  label: string;
  to: string;
  params?: { slug: string };
  hash?: string;
};

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Perusahaan",
    links: [
      { label: "Beranda", to: "/" },
      { label: "Tentang Kami", to: "/about" },
      { label: "Proyek", to: "/projects" },
      { label: "Galeri", to: "/gallery" },
      { label: "Kontak", to: "/contact" },
    ],
  },
  {
    title: "Produk",
    links: [
      { label: "Semua Produk", to: "/products" },
      {
        label: "Peralatan Dapur",
        to: "/produk/$slug",
        params: { slug: "peralatan-dapur" },
      },
      {
        label: "Peralatan Rumah Sakit",
        to: "/produk/$slug",
        params: { slug: "peralatan-rumah-sakit" },
      },
      {
        label: "Peralatan Laboratorium",
        to: "/produk/$slug",
        params: { slug: "peralatan-laboratorium" },
      },
      {
        label: "Penyimpanan Industri",
        to: "/produk/$slug",
        params: { slug: "penyimpanan-industri" },
      },
      {
        label: "Produk Kustom",
        to: "/produk/$slug",
        params: { slug: "produk-kustom" },
      },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Fabrikasi Kustom", to: "/", hash: "services" },
      { label: "Pemotongan Laser", to: "/", hash: "services" },
      { label: "Pengelasan Presisi", to: "/", hash: "services" },
      { label: "Instalasi & Perawatan", to: "/", hash: "services" },
      { label: "Artikel & Wawasan", to: "/", hash: "blog" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.6fr]">
          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label={COMPANY.name}
            >
              <img
                src={logoMark}
                alt={`Logo ${COMPANY.name}`}
                className="h-14 w-14 object-contain drop-shadow"
                loading="lazy"
                decoding="async"
              />

              <span className="text-xl font-extrabold tracking-tight">
                Master
                <span className="text-accent"> Stainless</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Merekayasa solusi stainless steel premium yang dibangun untuk
              performa dan dirancang untuk presisi.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Tautan media sosial"
                    className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* FOOTER NAVIGATION */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
                {col.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
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
          ))}

          {/* NEWSLETTER + CONTACT */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">
              Buletin
            </h4>

            <p className="mt-4 text-sm text-primary-foreground/60">
              Dapatkan wawasan industri dan pembaruan proyek langsung ke email
              Anda.
            </p>

            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40"
              />

              <Button type="submit" variant="gold">
                Gabung
              </Button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/60">
              {/* PHONE */}
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s|-/g, "")}`}
                  className="flex items-center gap-2 hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {COMPANY.phone}
                </a>
              </li>

              {/* EMAIL */}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {COMPANY.email}
                </a>
              </li>

              {/* ADDRESS */}
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {COMPANY.office}
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Semua hak dilindungi.
          </p>

          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent">
              Kebijakan Privasi
            </Link>

            <Link to="/contact" className="hover:text-accent">
              Syarat Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}